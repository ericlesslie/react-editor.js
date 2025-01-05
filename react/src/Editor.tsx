import { useState } from "react";
import { Block } from "./Block";

function Editor() {
  const [count, setCount] = useState(0);

  return (
    <div id="editorjs" className="editor-holder">
      <div className="codex-editor">
        <div className="codex-editor__redactor" style="padding-bottom: 300px;">
          <div className="ce-block" data-id="r_C0D87V00">
            <div className="ce-block__content">
              <div
                className="ce-paragraph cdx-block"
                contenteditable="true"
                data-placeholder-active="Type text or paste a link"
                data-empty="false"
              >
                Test
              </div>
            </div>
          </div>

          <div className="ce-block" data-id="UkbwvNDC-b">
            <div className="ce-block__content">
              <div className="cdx-block image-tool image-tool--caption image-tool--filled">
                <div
                  className="cdx-input image-tool__caption"
                  contenteditable="true"
                  data-placeholder="Caption"
                  data-empty="false"
                >
                  Test
                </div>

                <div className="cdx-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="5"
                      y="5"
                      stroke="currentColor"
                      stroke-width="2"
                      rx="4"
                    ></rect>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.7778 9.33331H13.7867"
                    ></path>
                  </svg>{" "}
                  Select an Image
                </div>
              </div>
            </div>
          </div>

          <div className="ce-block" data-id="O5YJIJDTBw">
            <div className="ce-block__content">
              <h2
                className="ce-header"
                contenteditable="true"
                data-placeholder=""
                data-empty="false"
              >
                Hello
              </h2>
            </div>
          </div>
          <div className="ce-block" data-id="viCJEhrgVS">
            <div className="ce-block__content">
              <blockquote className="cdx-block cdx-quote">
                <div
                  className="cdx-input cdx-quote__text"
                  contenteditable="true"
                  data-placeholder="Enter a quote"
                  data-empty="false"
                >
                  Hello
                </div>
                <div
                  className="cdx-input cdx-quote__caption"
                  contenteditable="true"
                  data-placeholder="Enter a caption"
                  data-empty="false"
                >
                  Whatever
                </div>
              </blockquote>
            </div>
          </div>
          <div className="ce-block" data-id="yneDsPoOPB">
            <div className="ce-block__content">
              <div className="cdx-block cdx-warning">
                <div
                  className="cdx-input cdx-warning__title"
                  contenteditable="true"
                  data-placeholder="Title"
                  data-empty="false"
                >
                  Warning
                </div>
                <div
                  className="cdx-input cdx-warning__message"
                  contenteditable="true"
                  data-placeholder="Message"
                  data-empty="false"
                >
                  Test
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="codex-editor-overlay">
          <div className="codex-editor-overlay__container">
            <div
              className="codex-editor-overlay__rectangle"
              style="display: none; inset: 810px calc(100% - 153px) calc(100% - 811px) 153px;"
            ></div>
          </div>
        </div>
        <div className="ce-toolbar ce-toolbar--opened" style="top: 44px;">
          <div className="ce-toolbar__content">
            <div className="ce-toolbar__actions ce-toolbar__actions--opened">
              <div className="ce-toolbar__plus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M12 7V12M12 17V12M17 12H12M12 12H7"
                  ></path>
                </svg>
              </div>
              <span className="ce-toolbar__settings-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2.6"
                    d="M9.40999 7.29999H9.4"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2.6"
                    d="M14.6 7.29999H14.59"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2.6"
                    d="M9.30999 12H9.3"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2.6"
                    d="M14.6 12H14.59"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2.6"
                    d="M9.40999 16.7H9.4"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2.6"
                    d="M14.6 16.7H14.59"
                  ></path>
                </svg>
              </span>
              <div className="ce-toolbox">
                <div className="ce-popover" style="--popover-height: 270px;">
                  <div className="ce-popover__container">
                    <div className="cdx-search-field ce-popover__search">
                      <div className="cdx-search-field__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="10.5"
                            cy="10.5"
                            r="5.5"
                            stroke="currentColor"
                            stroke-width="2"
                          ></circle>
                          <line
                            x1="15.4142"
                            x2="19"
                            y1="15"
                            y2="18.5858"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2"
                          ></line>
                        </svg>
                      </div>
                      <input
                        className="cdx-search-field__input"
                        placeholder="Filter"
                        tabindex="-1"
                        data-empty="false"
                      ></input>
                    </div>
                    <div className="ce-popover__nothing-found-message">
                      Nothing found
                    </div>
                    <div className="ce-popover__items">
                      <div
                        className="ce-popover-item"
                        data-item-name="paragraph"
                      >
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Text</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="header">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Heading</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="image">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="5"
                              y="5"
                              stroke="currentColor"
                              stroke-width="2"
                              rx="4"
                            ></rect>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13.7778 9.33331H13.7867"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Image</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="list">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <line
                              x1="12"
                              x2="19"
                              y1="7"
                              y2="7"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="12"
                              x2="19"
                              y1="12"
                              y2="12"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="12"
                              x2="19"
                              y1="17"
                              y2="17"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></line>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">List</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="code">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 8L5 12L9 16"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 8L19 12L15 16"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Code</div>
                        <div className="ce-popover-item__secondary-title">
                          Ctrl + ⇧ + D
                        </div>
                      </div>
                      <div className="ce-popover-item" data-item-name="quote">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Quote</div>
                      </div>
                      <div
                        className="ce-popover-item"
                        data-item-name="delimiter"
                      >
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <line
                              x1="6"
                              x2="10"
                              y1="12"
                              y2="12"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></line>
                            <line
                              x1="14"
                              x2="18"
                              y1="12"
                              y2="12"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></line>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Delimiter</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="table">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M10 5V18.5"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-width="2"
                              d="M5 10H19"
                            ></path>
                            <rect
                              width="14"
                              height="14"
                              x="5"
                              y="5"
                              stroke="currentColor"
                              stroke-width="2"
                              rx="4"
                            ></rect>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Table</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="raw">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"
                            ></path>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Raw HTML</div>
                      </div>
                      <div className="ce-popover-item" data-item-name="warning">
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="5"
                              y="5"
                              stroke="currentColor"
                              stroke-width="2"
                              rx="4"
                            ></rect>
                            <line
                              x1="12"
                              x2="12"
                              y1="9"
                              y2="12"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></line>
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M12 15.02V15.01"
                            ></path>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Warning</div>
                      </div>
                      <div
                        className="ce-popover-item"
                        data-item-name="checklist"
                      >
                        <div className="ce-popover-item__icon ce-popover-item__icon--tool">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"
                            ></path>
                            <rect
                              width="14"
                              height="14"
                              x="5"
                              y="5"
                              stroke="currentColor"
                              stroke-width="2"
                              rx="4"
                            ></rect>
                          </svg>
                        </div>
                        <div className="ce-popover-item__title">Checklist</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ce-settings"></div>
            </div>
          </div>
        </div>
        <div className="ce-inline-toolbar"></div>
      </div>
    </div>
  );
}

export default Editor;
