// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import TomSelect from "tom-select"

window.setupTomSelectForSingleSelect = function setupTomSelectForSingleSelect() {
  document.querySelectorAll('select').forEach((e) => {
    if (!e.tomselect) {
      new TomSelect(e, {
        field: 'text',
        direction: 'asc'
      });
    }
  });
}

window.setupTomSelectForMultiSelect = function setupTomSelectForSingleSelect() {
  document.querySelectorAll('select').forEach((e) => {
    if (!e.tomselect) {
      new TomSelect(e, {
        plugins: {
          remove_button: {
            title:'Remove this item',
          }
        },
        field: 'text',
        direction: 'asc'
      });
    }
  });
}


// 行儀が悪いが、グローバルに展開してしまう
import { handleEnterKeypressListItem, handleClickListItem, handleDeleteListItem, clear_form, updateItemPerPage, handleOnChangePagyItemsSelectorJs } from "./ya-common"
window.handleEnterKeypressListItem = handleEnterKeypressListItem;
window.handleClickListItem = handleClickListItem;
window.handleDeleteListItem = handleDeleteListItem;
window.clear_form = clear_form;
window.updateItemPerPage = updateItemPerPage;
window.handleOnChangePagyItemsSelectorJs = handleOnChangePagyItemsSelectorJs;

