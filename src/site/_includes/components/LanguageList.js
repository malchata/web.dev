/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const {getTranslatedUrls} = require('../../_filters/urls');
const {i18n} = require('../../_filters/i18n');
const {languageNames} = require('../../../../shared/locale');

module.exports = (url, lang) => {
  const langhrefs = getTranslatedUrls(url)
    .filter((langhref) => langhref[0] !== lang)
    .map((langhref) => {
      const href = langhref[1];
      return `<a class="w-post-signpost__link"
        translate="no"
        lang="${langhref[0]}"
        href="${href}">
      ${languageNames[langhref[0]]}</a>`;
    });
  const translatedTo = i18n('i18n.post.translated_to', lang);
  return langhrefs.length
    ? `<span class="w-post-signpost__title">${translatedTo}:
    ${langhrefs.join(', ')}</span>`
    : '';
};
