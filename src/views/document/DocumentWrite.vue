<template>
        <h1 class="text-2xl font-bold text-center">글 작성 페이지</h1>
            <div class="">
                <label for="title" class="block font-bold text-gray-700 mb-2 text-center">제목</label>
                <input id="title" v-model="documentWrite.title" type="text" name="title"
                       class="block mx-auto shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       placeholder="제목을 입력하세요" maxlength="30" size="30">
            </div>

        <div id="ckeditor">
            <ckeditor :editor="editor" v-model="documentWrite.content" :config="editorConfig"></ckeditor>
        </div>
        <div class="mt-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="submit">
                작성
            </button>
        </div>
</template>

<style scoped>
    #ckeditor {
        --ck-sample-base-spacing: 2em;
        --ck-sample-color-white: #fff;
        --ck-sample-color-green: #279863;
        --ck-sample-color-blue: #1a9aef;
        --ck-sample-container-width: 1285px;
        --ck-sample-sidebar-width: 350px;
        --ck-sample-editor-min-height: 400px;
        --ck-sample-editor-z-index: 10;
        --ck-z-default: 1;
        --ck-z-modal: calc(var(--ck-z-default) + 999);
        --ck-color-base-foreground: #fafafa;
        --ck-color-base-background: #fff;
        --ck-color-base-border: #ccced1;
        --ck-color-base-action: #53a336;
        --ck-color-base-focus: #6cb5f9;
        --ck-color-base-text: #333;
        --ck-color-base-active: #2977ff;
        --ck-color-base-active-focus: #0d65ff;
        --ck-color-base-error: #db3700;
        --ck-color-focus-border-coordinates: 218,81.8%,56.9%;
        --ck-color-focus-border: hsl(var(--ck-color-focus-border-coordinates));
        --ck-color-focus-outer-shadow: #cae1fc;
        --ck-color-focus-disabled-shadow: rgba(119,186,248,.3);
        --ck-color-focus-error-shadow: rgba(255,64,31,.3);
        --ck-color-text: var(--ck-color-base-text);
        --ck-color-shadow-drop: rgba(0,0,0,.15);
        --ck-color-shadow-drop-active: rgba(0,0,0,.2);
        --ck-color-shadow-inner: rgba(0,0,0,.1);
        --ck-color-button-default-background: transparent;
        --ck-color-button-default-hover-background: #f0f0f0;
        --ck-color-button-default-active-background: #f0f0f0;
        --ck-color-button-default-disabled-background: transparent;
        --ck-color-button-on-background: #f0f7ff;
        --ck-color-button-on-hover-background: #dbecff;
        --ck-color-button-on-active-background: #dbecff;
        --ck-color-button-on-disabled-background: #f0f2f4;
        --ck-color-button-on-color: #2977ff;
        --ck-color-button-action-background: var(--ck-color-base-action);
        --ck-color-button-action-hover-background: #4d9d30;
        --ck-color-button-action-active-background: #4d9d30;
        --ck-color-button-action-disabled-background: #7ec365;
        --ck-color-button-action-text: var(--ck-color-base-background);
        --ck-color-button-save: #008a00;
        --ck-color-button-cancel: #db3700;
        --ck-color-switch-button-off-background: #939393;
        --ck-color-switch-button-off-hover-background: #7d7d7d;
        --ck-color-switch-button-on-background: var(--ck-color-button-action-background);
        --ck-color-switch-button-on-hover-background: #4d9d30;
        --ck-color-switch-button-inner-background: var(--ck-color-base-background);
        --ck-color-switch-button-inner-shadow: rgba(0,0,0,.1);
        --ck-color-dropdown-panel-background: var(--ck-color-base-background);
        --ck-color-dropdown-panel-border: var(--ck-color-base-border);
        --ck-color-input-background: var(--ck-color-base-background);
        --ck-color-input-border: var(--ck-color-base-border);
        --ck-color-input-error-border: var(--ck-color-base-error);
        --ck-color-input-text: var(--ck-color-base-text);
        --ck-color-input-disabled-background: #f2f2f2;
        --ck-color-input-disabled-border: var(--ck-color-base-border);
        --ck-color-input-disabled-text: #757575;
        --ck-color-list-background: var(--ck-color-base-background);
        --ck-color-list-button-hover-background: var(--ck-color-button-default-hover-background);
        --ck-color-list-button-on-background: var(--ck-color-button-on-color);
        --ck-color-list-button-on-background-focus: var(--ck-color-button-on-color);
        --ck-color-list-button-on-text: var(--ck-color-base-background);
        --ck-color-panel-background: var(--ck-color-base-background);
        --ck-color-panel-border: var(--ck-color-base-border);
        --ck-color-toolbar-background: var(--ck-color-base-background);
        --ck-color-toolbar-border: var(--ck-color-base-border);
        --ck-color-tooltip-background: var(--ck-color-base-text);
        --ck-color-tooltip-text: var(--ck-color-base-background);
        --ck-color-engine-placeholder-text: #707070;
        --ck-color-upload-bar-background: #6cb5f9;
        --ck-color-link-default: #0000f0;
        --ck-color-link-selected-background: rgba(31,176,255,.1);
        --ck-color-link-fake-selection: rgba(31,176,255,.3);
        --ck-color-highlight-background: #ff0;
        --ck-disabled-opacity: .5;
        --ck-focus-outer-shadow-geometry: 0 0 0 3px;
        --ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);
        --ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);
        --ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);
        --ck-focus-ring: 1px solid var(--ck-color-focus-border);
        --ck-font-size-base: 13px;
        --ck-line-height-base: 1.84615;
        --ck-font-face: Helvetica,Arial,Tahoma,Verdana,Sans-Serif;
        --ck-font-size-tiny: 0.7em;
        --ck-font-size-small: 0.75em;
        --ck-font-size-normal: 1em;
        --ck-font-size-big: 1.4em;
        --ck-font-size-large: 1.8em;
        --ck-ui-component-min-height: 2.3em;
        --ck-border-radius: 2px;
        --ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;
        --ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);
        --ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
        --ck-spacing-unit: 0.6em;
        --ck-spacing-large: calc(var(--ck-spacing-unit)*1.5);
        --ck-spacing-standard: var(--ck-spacing-unit);
        --ck-spacing-medium: calc(var(--ck-spacing-unit)*0.8);
        --ck-spacing-small: calc(var(--ck-spacing-unit)*0.5);
        --ck-spacing-tiny: calc(var(--ck-spacing-unit)*0.3);
        --ck-spacing-extra-tiny: calc(var(--ck-spacing-unit)*0.16);
        --ck-icon-size: calc(var(--ck-line-height-base)*var(--ck-font-size-normal));
        --ck-switch-button-toggle-width: 2.6153846154em;
        --ck-switch-button-toggle-inner-size: calc(1.07692em + 1px);
        --ck-switch-button-translation: calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);
        --ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
        --ck-color-grid-tile-size: 24px;
        --ck-color-color-grid-check-icon: #166fd4;
        --ck-dropdown-max-width: 75vw;
        --ck-dropdown-arrow-size: calc(var(--ck-icon-size)*0.5);
        --ck-color-split-button-hover-background: #ebebeb;
        --ck-color-split-button-hover-border: #b3b3b3;
        --ck-toolbar-dropdown-max-width: 60vw;
        --ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
        --ck-balloon-border-width: 1px;
        --ck-balloon-arrow-offset: 2px;
        --ck-balloon-arrow-height: 10px;
        --ck-balloon-arrow-half-width: 8px;
        --ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
        --ck-color-editable-blur-selection: #d9d9d9;
        --ck-form-header-height: 38px;
        --ck-input-width: 18em;
        --ck-input-text-width: var(--ck-input-width);
        --ck-labeled-field-view-transition: .1s cubic-bezier(0,0,0.24,0.95);
        --ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
        --ck-labeled-field-label-default-position-y: calc(var(--ck-font-size-base)*0.6);
        --ck-color-labeled-field-label-background: var(--ck-color-base-background);
        --ck-balloon-fake-panel-offset-horizontal: 6px;
        --ck-balloon-fake-panel-offset-vertical: 6px;
        --ck-color-block-toolbar-button: var(--ck-color-text);
        --ck-block-toolbar-button-size: var(--ck-font-size-normal);
        --ck-widget-type-around-button-size: 20px;
        --ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
        --ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
        --ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
        --ck-color-widget-type-around-button-radar-start-alpha: 0;
        --ck-color-widget-type-around-button-radar-end-alpha: .3;
        --ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
        --ck-color-resizer: var(--ck-color-focus-border);
        --ck-color-resizer-tooltip-background: #262626;
        --ck-color-resizer-tooltip-text: #f2f2f2;
        --ck-resizer-border-radius: var(--ck-border-radius);
        --ck-resizer-tooltip-offset: 10px;
        --ck-resizer-tooltip-height: calc(var(--ck-spacing-small)*2 + 10px);
        --ck-widget-outline-thickness: 3px;
        --ck-widget-handler-icon-size: 16px;
        --ck-widget-handler-animation-duration: 200ms;
        --ck-widget-handler-animation-curve: ease;
        --ck-color-widget-blurred-border: #dedede;
        --ck-color-widget-hover-border: #ffc83d;
        --ck-color-widget-editable-focus-background: var(--ck-color-base-background);
        --ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
        --ck-resizer-size: 10px;
        --ck-resizer-offset: calc(var(--ck-resizer-size)/-2 - 2px);
        --ck-resizer-border-width: 1px;
        --ck-clipboard-drop-target-dot-width: 12px;
        --ck-clipboard-drop-target-dot-height: 8px;
        --ck-clipboard-drop-target-color: var(--ck-color-focus-border);
        --ck-color-image-caption-background: #f7f7f7;
        --ck-color-image-caption-text: #333;
        --ck-color-image-caption-highligted-background: #fd0;
        --ck-image-style-spacing: 1.5em;
        --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing)/2);
        --ck-color-image-upload-icon: #fff;
        --ck-color-image-upload-icon-background: #008a00;
        --ck-image-upload-icon-size: 20;
        --ck-image-upload-icon-width: 2px;
        --ck-image-upload-icon-is-visible: clamp(0px,100% - 50px,1px);
        --ck-color-upload-placeholder-loader: #b3b3b3;
        --ck-upload-placeholder-loader-size: 32px;
        --ck-upload-placeholder-image-aspect-ratio: 2.8;
        --ck-media-embed-placeholder-icon-size: 3em;
        --ck-color-media-embed-placeholder-url-text: #757575;
        --ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
        --ck-color-table-focused-cell-background: rgba(158,201,250,.3);
        --ck-insert-table-dropdown-padding: 10px;
        --ck-insert-table-dropdown-box-height: 11px;
        --ck-insert-table-dropdown-box-width: 12px;
        --ck-insert-table-dropdown-box-margin: 1px;
        --ck-table-selected-cell-background: rgba(158,207,250,.3);
        font-family: sans-serif, Arial, Verdana, "Trebuchet MS", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 16px;
        line-height: 1.5;
        color: #2D3A4A;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        position: relative;
        width: 100%;
        justify-content: center;
    }
</style>
<script>
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import CKEditor from '@ckeditor/ckeditor5-vue';
export default {
    data() {
        return {
            editor: Editor,
            documentWrite : {
              content: '',
              title: '',
              employeeId: 'EMP-123456'
            },
            editorConfig: {
                language: 'ko',
            },
        };
    },
    methods: {
        submit() {
          this.$axios.post(this.$serverUrl + '/document',this.documentWrite)
              .then((res) => {
                // alert('글이 저장되었습니다.')
                this.$router.replace('document');

              }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        },
    },
  mounted() {

  }
}
</script>