(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    align: {
      "default": 'right'
    },
    width: {
      "default": '48'
    },
    contentClasses: {
      "default": function _default() {
        return ['py-1', 'bg-white'];
      }
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  created: function created() {
    var _this = this;

    var closeOnEscape = function closeOnEscape(e) {
      if (_this.open && e.keyCode === 27) {
        _this.open = false;
      }
    };

    this.$once('hook:destroyed', function () {
      document.removeEventListener('keydown', closeOnEscape);
    });
    document.addEventListener('keydown', closeOnEscape);
  },
  computed: {
    widthClass: function widthClass() {
      return {
        '48': 'w-48'
      }[this.width.toString()];
    },
    alignmentClasses: function alignmentClasses() {
      if (this.align == 'left') {
        return 'origin-top-left left-0';
      } else if (this.align == 'right') {
        return 'origin-top-right right-0';
      } else {
        return 'origin-top';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jetstream_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Jetstream/ApplicationLogo */ "./resources/js/Jetstream/ApplicationLogo.vue");
/* harmony import */ var _Jetstream_ApplicationMark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Jetstream/ApplicationMark */ "./resources/js/Jetstream/ApplicationMark.vue");
/* harmony import */ var _Jetstream_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Jetstream/Dropdown */ "./resources/js/Jetstream/Dropdown.vue");
/* harmony import */ var _Jetstream_DropdownLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Jetstream/DropdownLink */ "./resources/js/Jetstream/DropdownLink.vue");
/* harmony import */ var _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Jetstream/NavLink */ "./resources/js/Jetstream/NavLink.vue");
/* harmony import */ var _Jetstream_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Jetstream/ResponsiveNavLink */ "./resources/js/Jetstream/ResponsiveNavLink.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    JetApplicationLogo: _Jetstream_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__["default"],
    JetApplicationMark: _Jetstream_ApplicationMark__WEBPACK_IMPORTED_MODULE_1__["default"],
    JetDropdown: _Jetstream_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"],
    JetDropdownLink: _Jetstream_DropdownLink__WEBPACK_IMPORTED_MODULE_3__["default"],
    JetNavLink: _Jetstream_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"],
    JetResponsiveNavLink: _Jetstream_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      showingNavigationDropdown: false
    };
  },
  methods: {
    switchToTeam: function switchToTeam(team) {
      this.$inertia.put(route('current-team.update'), {
        'team_id': team.id
      }, {
        preserveState: false
      });
    },
    logout: function logout() {
      axios.post(route('logout').url()).then(function (response) {
        window.location = '/';
      });
    }
  },
  computed: {
    path: function path() {
      return window.location.pathname;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "relative" },
    [
      _c(
        "div",
        {
          on: {
            click: function($event) {
              _vm.open = !_vm.open
            }
          }
        },
        [_vm._t("trigger")],
        2
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open"
          }
        ],
        staticClass: "fixed inset-0 z-40",
        on: {
          click: function($event) {
            _vm.open = false
          }
        }
      }),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "transition ease-out duration-200",
            "enter-class": "transform opacity-0 scale-95",
            "enter-to-class": "transform opacity-100 scale-100",
            "leave-active-class": "transition ease-in duration-75",
            "leave-class": "transform opacity-100 scale-100",
            "leave-to-class": "transform opacity-0 scale-95"
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.open,
                  expression: "open"
                }
              ],
              staticClass: "absolute z-50 mt-2 rounded-md shadow-lg",
              class: [_vm.widthClass, _vm.alignmentClasses],
              staticStyle: { display: "none" },
              on: {
                click: function($event) {
                  _vm.open = false
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "rounded-md shadow-xs",
                  class: _vm.contentClasses
                },
                [_vm._t("content")],
                2
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "min-h-screen bg-gray-100" },
    [
      _c("nav", { staticClass: "bg-white border-b border-gray-100" }, [
        _c("div", { staticClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
          _c("div", { staticClass: "flex justify-between h-16" }, [
            _c("div", { staticClass: "flex" }, [
              _c(
                "div",
                { staticClass: "flex-shrink-0 flex items-center" },
                [
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("dashboard") } },
                    [
                      _c("jet-application-mark", {
                        staticClass: "block h-9 w-auto"
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" },
                [
                  _c(
                    "jet-nav-link",
                    {
                      attrs: {
                        href: _vm.route("dashboard"),
                        active: _vm.$page.currentRouteName == "dashboard"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Dashboard\n                        "
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "hidden sm:flex sm:items-center sm:ml-6" },
              [
                _c(
                  "div",
                  { staticClass: "ml-3 relative" },
                  [
                    _c("jet-dropdown", {
                      attrs: { align: "right", width: "48" },
                      scopedSlots: _vm._u([
                        {
                          key: "trigger",
                          fn: function() {
                            return [
                              _vm.$page.jetstream.managesProfilePhotos
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "h-8 w-8 rounded-full object-cover",
                                        attrs: {
                                          src: _vm.$page.user.profile_photo_url,
                                          alt: _vm.$page.user.name
                                        }
                                      })
                                    ]
                                  )
                                : _c(
                                    "button",
                                    {
                                      staticClass:
                                        "flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                    },
                                    [
                                      _c("div", [
                                        _vm._v(_vm._s(_vm.$page.user.name))
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "ml-1" }, [
                                        _c(
                                          "svg",
                                          {
                                            staticClass: "fill-current h-4 w-4",
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 20 20"
                                            }
                                          },
                                          [
                                            _c("path", {
                                              attrs: {
                                                "fill-rule": "evenodd",
                                                d:
                                                  "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                "clip-rule": "evenodd"
                                              }
                                            })
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                            ]
                          },
                          proxy: true
                        },
                        {
                          key: "content",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "block px-4 py-2 text-xs text-gray-400"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Manage Account\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "jet-dropdown-link",
                                { attrs: { href: _vm.route("profile.show") } },
                                [
                                  _vm._v(
                                    "\n                                    Profile\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.$page.jetstream.hasApiFeatures
                                ? _c(
                                    "jet-dropdown-link",
                                    {
                                      attrs: {
                                        href: _vm.route("api-tokens.index")
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    API Tokens\n                                "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "border-t border-gray-100"
                              }),
                              _vm._v(" "),
                              _vm.$page.jetstream.hasTeamFeatures
                                ? [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "block px-4 py-2 text-xs text-gray-400"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Manage Team\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "jet-dropdown-link",
                                      {
                                        attrs: {
                                          href: _vm.route(
                                            "teams.show",
                                            _vm.$page.user.current_team
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Team Settings\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm.$page.jetstream.canCreateTeams
                                      ? _c(
                                          "jet-dropdown-link",
                                          {
                                            attrs: {
                                              href: _vm.route("teams.create")
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Create New Team\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "border-t border-gray-100"
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "block px-4 py-2 text-xs text-gray-400"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Switch Teams\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.$page.user.all_teams, function(
                                      team
                                    ) {
                                      return [
                                        _c(
                                          "form",
                                          {
                                            on: {
                                              submit: function($event) {
                                                $event.preventDefault()
                                                return _vm.switchToTeam(team)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "jet-dropdown-link",
                                              { attrs: { as: "button" } },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "flex items-center"
                                                  },
                                                  [
                                                    team.id ==
                                                    _vm.$page.user
                                                      .current_team_id
                                                      ? _c(
                                                          "svg",
                                                          {
                                                            staticClass:
                                                              "mr-2 h-5 w-5 text-green-400",
                                                            attrs: {
                                                              fill: "none",
                                                              "stroke-linecap":
                                                                "round",
                                                              "stroke-linejoin":
                                                                "round",
                                                              "stroke-width":
                                                                "2",
                                                              stroke:
                                                                "currentColor",
                                                              viewBox:
                                                                "0 0 24 24"
                                                            }
                                                          },
                                                          [
                                                            _c("path", {
                                                              attrs: {
                                                                d:
                                                                  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _vm._v(_vm._s(team.name))
                                                    ])
                                                  ]
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "border-t border-gray-100"
                                    })
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.logout($event)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "jet-dropdown-link",
                                    { attrs: { as: "button" } },
                                    [
                                      _vm._v(
                                        "\n                                        Logout\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    })
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "-mr-2 flex items-center sm:hidden" }, [
              _c(
                "button",
                {
                  staticClass:
                    "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
                  on: {
                    click: function($event) {
                      _vm.showingNavigationDropdown = !_vm.showingNavigationDropdown
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6",
                      attrs: {
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }
                    },
                    [
                      _c("path", {
                        class: {
                          hidden: _vm.showingNavigationDropdown,
                          "inline-flex": !_vm.showingNavigationDropdown
                        },
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M4 6h16M4 12h16M4 18h16"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        class: {
                          hidden: !_vm.showingNavigationDropdown,
                          "inline-flex": _vm.showingNavigationDropdown
                        },
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "sm:hidden",
            class: {
              block: _vm.showingNavigationDropdown,
              hidden: !_vm.showingNavigationDropdown
            }
          },
          [
            _c(
              "div",
              { staticClass: "pt-2 pb-3 space-y-1" },
              [
                _c(
                  "jet-responsive-nav-link",
                  {
                    attrs: {
                      href: _vm.route("dashboard"),
                      active: _vm.$page.currentRouteName == "dashboard"
                    }
                  },
                  [_vm._v("\n                    Dashboard\n                ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "pt-4 pb-1 border-t border-gray-200" }, [
              _c("div", { staticClass: "flex items-center px-4" }, [
                _c("div", { staticClass: "flex-shrink-0" }, [
                  _c("img", {
                    staticClass: "h-10 w-10 rounded-full",
                    attrs: {
                      src: _vm.$page.user.profile_photo_url,
                      alt: _vm.$page.user.name
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "ml-3" }, [
                  _c(
                    "div",
                    { staticClass: "font-medium text-base text-gray-800" },
                    [_vm._v(_vm._s(_vm.$page.user.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "font-medium text-sm text-gray-500" },
                    [_vm._v(_vm._s(_vm.$page.user.email))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-3 space-y-1" },
                [
                  _c(
                    "jet-responsive-nav-link",
                    {
                      attrs: {
                        href: _vm.route("profile.show"),
                        active: _vm.$page.currentRouteName == "profile.show"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Profile\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.$page.jetstream.hasApiFeatures
                    ? _c(
                        "jet-responsive-nav-link",
                        {
                          attrs: {
                            href: _vm.route("api-tokens.index"),
                            active:
                              _vm.$page.currentRouteName == "api-tokens.index"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        API Tokens\n                    "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      attrs: { method: "POST" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.logout($event)
                        }
                      }
                    },
                    [
                      _c(
                        "jet-responsive-nav-link",
                        { attrs: { as: "button" } },
                        [
                          _vm._v(
                            "\n                            Logout\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$page.jetstream.hasTeamFeatures
                    ? [
                        _c("div", { staticClass: "border-t border-gray-200" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "block px-4 py-2 text-xs text-gray-400"
                          },
                          [
                            _vm._v(
                              "\n                            Manage Team\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "jet-responsive-nav-link",
                          {
                            attrs: {
                              href: _vm.route(
                                "teams.show",
                                _vm.$page.user.current_team
                              ),
                              active: _vm.$page.currentRouteName == "teams.show"
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Team Settings\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "jet-responsive-nav-link",
                          {
                            attrs: {
                              href: _vm.route("teams.create"),
                              active:
                                _vm.$page.currentRouteName == "teams.create"
                            }
                          },
                          [
                            _vm._v(
                              "\n                            Create New Team\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "border-t border-gray-200" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "block px-4 py-2 text-xs text-gray-400"
                          },
                          [
                            _vm._v(
                              "\n                            Switch Teams\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.$page.user.all_teams, function(team) {
                          return [
                            _c(
                              "form",
                              {
                                key: team.id,
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.switchToTeam(team)
                                  }
                                }
                              },
                              [
                                _c(
                                  "jet-responsive-nav-link",
                                  { attrs: { as: "button" } },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "flex items-center" },
                                      [
                                        team.id ==
                                        _vm.$page.user.current_team_id
                                          ? _c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "mr-2 h-5 w-5 text-green-400",
                                                attrs: {
                                                  fill: "none",
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24"
                                                }
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d:
                                                      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                  }
                                                })
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("div", [_vm._v(_vm._s(team.name))])
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("header", { staticClass: "bg-white shadow" }, [
        _c(
          "div",
          { staticClass: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" },
          [_vm._t("header")],
          2
        )
      ]),
      _vm._v(" "),
      _c("main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modal", multiple: "" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Jetstream/Dropdown.vue":
/*!*********************************************!*\
  !*** ./resources/js/Jetstream/Dropdown.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_bd908476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=bd908476& */ "./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_bd908476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_bd908476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Jetstream/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476&":
/*!****************************************************************************!*\
  !*** ./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_bd908476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=bd908476& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Jetstream/Dropdown.vue?vue&type=template&id=bd908476&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_bd908476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_bd908476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue":
/*!********************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=template&id=5663af57& */ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&");
/* harmony import */ var _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/AppLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/AppLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&":
/*!***************************************************************************!*\
  !*** ./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLayout.vue?vue&type=template&id=5663af57& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Layouts/AppLayout.vue?vue&type=template&id=5663af57&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLayout_vue_vue_type_template_id_5663af57___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);