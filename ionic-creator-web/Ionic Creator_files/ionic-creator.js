!function () {
    function e(char) {
        var t = {"&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"};
        return char.replace(/[&<>"']/g, function (idx) {
            return t[idx]
        })
    }

    function t() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }

        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }

    var n = angular.module("ionic.creator", ["ui.router", "ngSanitize", "ngAnimate", "ngCookies", "ngResource", "ionic.creator.components", "smoothScroll", "color.picker"])
    .config(["$animateProvider", function ($animateProvider) {
        $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/)
    }])
    .run(["$rootScope", "$state", "Designer", "$timeout", function ($rootScope, $state, Designer, $timeout) {
        $rootScope.saveCode = "saved"
            , $rootScope.$on("$stateChangeError", function (e, n, i, o, a, r) {
            // 如未登录，进入登录页
            console.log("State change error", r), r.data && "not_logged_in" == r.data.error && $state.go("login")
        }), $rootScope.$on("document.loadError", function (e, n) {
            // 加载失败，进入加载失败页。
            console.error("Unable to load project:", n);
            var i = n.config.url.split("/");
            $state.go("dashboard.loadError", {projectId: i[i.length - 1]})
        }), $rootScope.$on("document.createError", function (e, t) {
            console.error("Unable to create project:", t)
        }), $rootScope.$on("document.parseError", function (e, t) {
            console.error(t)
        }), $rootScope.$on("document.exporter.error", function (e, t) {
            alert("Unable to export project. See console for errors."), console.error(t)
        }), $rootScope.$on("document.saving", function (t, n) {
            $rootScope.saveStatus = "Saving...", $rootScope.saveCode = "saving"
        }), $rootScope.$on("document.doneSaving", function (t, n) {
            $rootScope.saveStatus = "All changes saved", $rootScope.saveCode = "saved"
        }), $rootScope.$on("document.saveError", function (t, n) {
            $rootScope.saveStatus = "Error saving changes", $rootScope.saveCode = "error"
        }), $rootScope.$on("auth.error", function (e, n) {
            console.error("Auth error", n), $state.go("signup")
        }), $rootScope.$on("auth.expired", function (e, n) {
            $state.go("login", {expired: true})
        }), $rootScope.$on("project.created", function (e, i) {
            Designer.setProject(i), $state.go("app", {appId: Designer.getDocument().getDocumentId()})
        })
    }]);
    !function () {
        window.Share = {
            init: function () {
                var e = this, t = document.getElementById("dim-lights");
                t && t.addEventListener("click", function (t) {
                    e.toggleDim()
                });
                for (var n = document.querySelectorAll(".toggle-buttons"), i = 0; i < n.length; i++)this.initToggle(n[i]);
                var o = document.querySelector("#platform-toggle");
                o && o.addEventListener("change", function (t) {
                    document.body.classList.remove("preview-ios"), document.body.classList.remove("preview-android"), document.body.classList.add("preview-" + t.detail), e.updateFrame(t.detail)
                })
            }, updateFrame: function (e) {
                var t = document.getElementById("mainframe"), n = t.src;
                n = n.replace("?ionicplatform=ios", ""), n = n.replace("?ionicplatform=android", ""), t.src = n + "?ionicplatform=" + e
            }, initToggle: function (e) {
                e.addEventListener("click", function (t) {
                    for (var n = e.querySelectorAll(".toggle-button"), i = 0; i < n.length; i++)n[i].classList.remove("active");
                    t.target.classList.add("active");
                    var t = new CustomEvent("change", {detail: t.target.getAttribute("data-value")});
                    e.dispatchEvent(t)
                })
            }, toggleDim: function () {
                var e = document.querySelector("body");
                e.classList.contains("dim") ? e.classList.remove("dim") : e.classList.add("dim")
            }
        }, window.Share.init()
    }()
    , n.controller("NavCtrl", ["$scope", "$state", "$rootScope", "Designer", "ShareModal", "ThemesModal", "Exporter", "User", function (e, t, n, i, o, a, r, l) {
        e.designer = i, e.userService = l, e.doAppSettings = function () {
            i.select(i.getDocument().getRoot())
        }, e.doShare = function () {
            o.show(i.getProject())
        }, e.doSave = function () {
            i.AppGraph._save()
        }, e.doExport = function () {
            r["export"]()
        }, e.doThemes = function () {
            a.show(i.getProject().app_id)
        }
    }]).controller("MainCtrl", ["$scope", "$state", "User", "Project", function (e, t, n, i) {
        n.get().then(function (e) {
            console.log("USER", e), i.all().$promise.then(function (e) {
                console.log("Inside Project?", e), e.length ? (console.log("Attempting to goto ", e[0].app_id), t.go("app", {appId: e[0].app_id})) : (console.log("Going to first-run"), t.go("dashboard.projects", {"new": true}))
            }, function (e) {
                t.go("login", {loadError: true})
            })
        }, function (e) {
            t.go("signup")
        })
    }]).controller("FirstRunCtrl", ["$scope", "$timeout", "$state", "FirstRun", "User", "Project", "Designer", "Projects", "PageTemplates", function (e, t, n, i, o, a, r, l, s) {
        e.sizes = ["1", "2-10", "10-50", "50-200", "200-500", "500+"], o.get().then(function (t) {
            var n = o.getFirstName();
            n ? e.heyName = "Hey, " + n : e.heyName = "Hey!", i.go(e)
        }, function (e) {
            i.hide(), n.go("login", {loggedOut: true})
        }), e.infoData = {project: {}, user: {}}, e.infoData.project.template = "blank", e.skipInfo = function () {
            e.formPage = "project"
        }, e.setPage = function (t) {
            e.formPage = t
        }, e.formPage = "info", e.submit = function () {
            o.save({}, true), l.createNew(e.infoData.project.name, s.get("ionic_blank")).then(function (e) {
                r.setProject(e), i.hide(), n.go("app", {appId: r.getDocument().getDocumentId()})
            })
        }
    }]).controller("DesignerCtrl", ["$scope", "$state", "$rootScope", "Designer", "Project", "User", function (e, t, n, i, o, a) {
        a.get().then(function () {
        }, function (e) {
            t.go("signup", {})
        }), e.upgrade = function () {
            Stats.t("Preview Mobile App Button"), t.go("dashboard.upgrade")
        }
    }]).controller("AppCtrl", ["$scope", "$rootScope", "$state", "$stateParams", "Designer", "Project", "Shortcuts", "User", "ComponentFactory", function (e, t, n, i, o, a, r, l, s) {
        function d() {
            e.doc = o.getDocument(), t.doc = e.doc, t.$on("document.pageAdded", function (e, t) {
                o.setActivePageId(t.getId(), true)
            }), e.addPage = function () {
                o.addPage()
            }, e.removePage = function (e) {
                o.removePage(e)
            }
        }

        return t.showDesigner = false, t.hasLoadedDesignerBefore ? void(window.location.href = "/app/designer/" + i.appId) : (t.hasLoadedDesignerBefore = true, e.designer = o, t.designer = o, o.init(), r.bind(), e.appLoading = true, void a.get({appId: i.appId}).$promise.then(function (e) {
            s.clearIdMap(), o.setProject(e), d(), t.showDesigner = true
        }, function (e) {
            t.$emit("document.loadError", e)
        }))
    }]).controller("LoginCtrl", ["$scope", "$state", "$stateParams", "User", "$rootScope", function (e, t, n, i, o) {
        e.data = {}, e.userService = i, e.loggedOut = n.loggedOut, e.didUserLogOut = n.didUserLogOut, e.loadError = n.loadError, e.ssoLoginError = o.ssoLoginError, o.ssoLoginError = false, e.loadingIndicator = true;
        var a = e.$watch("user", function (n, i) {
            n ? t.go("dashboard") : null === n && (e.loadingIndicator = false)
        });
        e.tryLogin = function () {
            e.loadingIndicator = true, a(), i.login(e.data).then(function (e) {
                window.location = "/login"
            }, function (t) {
                e.loadingIndicator = false, console.log("User err", t), 401 == t.status && "" == t.data ? e.loginErrors = {global: ["Unable to log in with that email and password. Please try again or create a new account."]} : "" === t.data || null === t.data ? e.loginErrors = {global: ['Unable to login due to a request error.<br /><br /><b>The most common errors are a browser plugin modifying CORS / cross-origin headers or AdBlockers modifying requests, please disable any such plugins</b> (<i>you can test this by attempting to login in Chrome incognito mode, which doesn\'t load plugins</i>).<br /><br />Please try again later or <a href="/app/support">Contact support</a>.']} : e.loginErrors = {global: [t.data]}
            })
        }
    }]).controller("SignupCtrl", ["$scope", "$state", "User", function (e, t, n) {
        e.data = {email: e.queryParams && e.queryParams.email || ""}, e.loadingIndicator = true;
        var i = e.$watch("user", function (n, i) {
            n ? t.go("dashboard") : null === n && (e.loadingIndicator = false)
        });
        e.trySignup = function () {
            e.loadingIndicator = true, i(), console.log("Doing signup", e.data), n.signup(e.data).then(function (e) {
                window.location = "/login"
            }, function (t) {
                e.loadingIndicator = false, 400 === t.status ? e.signupErrors = t.data : e.loginErrors = {global: ['Unable to signup due to a request error.<br /><br /><b>The most common errors are a browser plugin modifying CORS / cross-origin headers or AdBlockers modifying requests, please disable any such plugins</b> (<i>you can test this by attempting to signup in Chrome incognito mode, which doesn\'t load plugins</i>).<br /><br />Please try again later or <a href="/app/support">Contact support</a>.']}
            })
        }
    }]).controller("LogoutCtrl", ["$scope", "$rootScope", "$state", "$http", "Config", function (e, t, n, i, o) {
        var a = o.get("api_url");
        i.get(a + "/user/logout").then(function (e) {
            t.user = null, n.go("login", {didUserLogOut: true})
        })
    }]).controller("ForgotPasswordCtrl", ["$scope", function (e) {
        e.data = {}, e.tryReset = function () {
            console.log("Doing reset", e.data)
        }
    }]).controller("PropsCtrl", ["$scope", function (e) {
        e.settings = {appName: "Conference Name"}, e.$watch("settings", function (e) {
            console.log("Settings changed", e)
        }, true)
    }]).controller("AppSettingsCtrl", ["$scope", function (e) {
    }]).controller("PreviewCtrl", ["Project", "$scope", "$http", "$stateParams", "DocumentExporter", function (e, t, n, i, o) {
        function a() {
        }

        t.loading = true, e.get({appId: i.appId}).$promise.then(function (e) {
            t.project = e, t.loading = false, a()
        }, function (e) {
            t.previewError = true
        })
    }]).controller("SupportCtrl", ["$scope", function (e) {
    }]), n.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", function (e, t, n, i) {
        i.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", i.defaults.withCredentials = true, t.otherwise("/"), e.state("home", {
            url: "/app",
            controller: "MainCtrl"
        }).state("dashboard", {
            url: "/app/dashboard",
            redirectTo: "dashboard.projects",
            controller: "DashboardCtrl",
            templateUrl: "/tmpl/dashboard/dashboard.tmpl.html",
            resolve: {
                hasUser: ["User", "$q", "$http", "$rootScope", function (e, t, n, i) {
                    return e.get().then(function (o) {
                        return n.get("/sso-status").then(function (e) {
                            return o
                        }, function (n) {
                            return i.ssoLoginError = true, e.logout(), t.reject(n)
                        })
                    }, function (e) {
                        return t.reject(e)
                    })
                }]
            }
        }).state("dashboard.loadError", {
            parent: "dashboard",
            url: "/load-error/:projectId",
            controller: "LoadErrorCtrl",
            templateUrl: "/tmpl/designer/load-error.tmpl.html"
        }).state("dashboard.upgrade", {
            parent: "dashboard",
            url: "/upgrade",
            controller: "UpgradeCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-upgrade.tmpl.html"
        }).state("dashboard.profile", {
            parent: "dashboard",
            redirectTo: "dashboard.profile.edit",
            url: "/profile",
            controller: "DashboardProfileCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-profile.tmpl.html"
        }).state("dashboard.profile.edit", {
            parent: "dashboard.profile",
            url: "/edit",
            controller: "DashboardProfileEditCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-profile-edit.tmpl.html"
        }).state("dashboard.profile.password", {
            parent: "dashboard.profile",
            url: "/password",
            controller: "DashboardProfilePasswordCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-profile-password.tmpl.html"
        }).state("dashboard.profile.billing", {
            parent: "dashboard.profile",
            url: "/billing",
            controller: "DashboardProfileBillingCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-profile-billing.tmpl.html"
        }).state("dashboard.projects", {
            parent: "dashboard",
            url: "/projects",
            controller: "DashboardProjectsCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-projects.tmpl.html"
        }).state("dashboard.teams", {
            parent: "dashboard",
            url: "/groups",
            controller: "DashboardTeamsCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-teams.tmpl.html"
        }).state("dashboard.team", {
            parent: "dashboard",
            url: "/group/:id/:slug",
            controller: "DashboardTeamCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-team.tmpl.html"
        }).state("dashboard.help", {
            parent: "dashboard",
            redirectTo: "dashboard.help.index",
            url: "/help",
            controller: "DashboardHelpCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-help.tmpl.html"
        }).state("dashboard.help.index", {
            parent: "dashboard.help",
            url: "/index",
            controller: "DashboardHelpIndexCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-help-index.tmpl.html"
        }).state("dashboard.help.videos", {
            parent: "dashboard.help",
            url: "/videos",
            controller: "DashboardHelpVideosCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-help-videos.tmpl.html"
        }).state("dashboard.help.support", {
            parent: "dashboard.help",
            url: "/support",
            controller: "DashboardHelpSupportCtrl",
            templateUrl: "/tmpl/dashboard/dashboard-help-support.tmpl.html"
        }).state("support", {
            url: "/app/support",
            controller: "SupportCtrl",
            templateUrl: "/tmpl/support.tmpl.html"
        }).state("login", {
            url: "/app/login?loggedOut&loadError&didUserLogOut",
            controller: "LoginCtrl",
            templateUrl: "/tmpl/login.tmpl.html"
        }).state("logout", {url: "/app/logout", controller: "LogoutCtrl"}).state("signup", {
            url: "/app/signup",
            controller: "SignupCtrl",
            templateUrl: "/tmpl/signup.tmpl.html"
        }).state("forgot-password", {
            url: "/app/forgot-password",
            controller: "ForgotPasswordCtrl",
            templateUrl: "/tmpl/forgot-password.tmpl.html"
        }).state("first-run", {
            url: "/app/first-run",
            controller: "FirstRunCtrl",
            templateUrl: "/tmpl/first-run.tmpl.html"
        }).state("designer", {
            url: "/app/designer",
            controller: "DesignerCtrl",
            templateUrl: "/tmpl/designer.tmpl.html"
        }).state("app", {
            parent: "designer",
            url: "/:appId",
            controller: "AppCtrl",
            templateUrl: "/tmpl/home.tmpl.html",
            resolve: {
                hasUser: ["User", "$q", function (e, t) {
                    return e.get()
                }]
            }
        }).state("app.design", {
            parent: "home",
            url: "/page/",
            controller: "AppDesignCtrl"
        }).state("app.design.page", {
            parent: "home",
            url: ":pageId",
            controller: "AppScreenCtrl"
        }).state("app.settings", {
            parent: "home",
            url: "/settings",
            controller: "AppSettingsCtrl",
            templateUrl: "/tmpl/app-settings.tmpl.html"
        }), n.html5Mode({enabled: true, requireBase: false})
    }]).run(["User", "$http", "$cookies", "$state", "FirstRun", "$rootScope", function (e, t, n, i, o, a) {
        t.defaults.headers.post["X-CSRFToken"] = n.csrftoken, t.defaults.headers.put["X-CSRFToken"] = n.csrftoken, e.get().then(function (e) {
        }, function (e) {
        }), a.$on("$stateChangeStart", function (e, t, n) {
            t.redirectTo && (e.preventDefault(), i.go(t.redirectTo, n))
        })
    }]).provider("djangoCsrf", [function () {
        var e = "X-CSRFToken", t = "csrftoken", n = ["GET"];
        this.setHeaderName = function (t) {
            e = t
        }, this.setCookieName = function (e) {
            t = e
        }, this.setAllowedMethods = function (e) {
            n = e
        }, this.$get = ["$cookies", function (i) {
            return {
                request: function (o) {
                    return -1 === n.indexOf(o.method) && (o.headers[e] = i[t]), o
                }
            }
        }]
    }]).config(["$httpProvider", function (e) {
        e.interceptors.push("djangoCsrf")
    }]);
    var o = {
        href: function (e, t, n) {
            var i = window.Designer.getById(t);
            if (window.compiling)if ("undefined" == typeof i)0 == t.indexOf("tel") || 0 == t.indexOf("mailto") ? e.setAttribute("href", t) : (e.setAttribute("href", "#"), window.compiling && e.setAttribute("onclick", "window.open('" + t + "', '_system', 'location=yes'); return false;")); else {
                var o = i.get("routeViews", []), a = n.getParentPage().get("routeViews", []), r = "";
                if (o.length > 1 && 0 == a.length) {
                    var l = n.get("linkView", "");
                    if ("" == l) {
                        for (var s = false, d = "", c = [], p = 0; p < o.length; p++) {
                            var u = window.Designer.getById(o[p]);
                            u.get("defaultPage", "") == i.id && (d = o[p], s = true), c.push({
                                id: o[p],
                                title: u.get("title")
                            })
                        }
                        s || (d = c[0].id), n.set("linkView", d), l = d
                    }
                    r = "_" + l
                } else n.set("linkView", "");
                for (var g = i.get("idName"), h = i; h && "" !== h.get("parentState");) {
                    var m = h.get("parentState");
                    h = window.Designer.getById(m), h && (g = h.get("idName") + "." + g)
                }
                if (g && e.setAttribute("ui-sref", g + r), "undefined" == typeof n)return;
                for (var f = n.parent, v = false, y = null; "undefined" != typeof f && 0 == v;) {
                    if ("side-menu2" == f.componentType) {
                        v = true, y = f;
                        break
                    }
                    f = f.parent
                }
                v && 0 == y.get("exposeAsideWhen", true) && e.setAttribute("menu-close", "")
            }
        }, Styler: function (e) {
            function t(e) {
                var t, n;
                for (var o in i) {
                    t = o == a ? e.getAttribute("id") == a ? e : e.querySelector("#" + a) : e.querySelector(":scope " + o), n = "";
                    for (var r in i[o])n = n + r + ":" + i[o][r] + ";";
                    t.setAttribute("style", n)
                }
            }

            function n(e) {
                var t;
                for (var n in o) {
                    t = n == a ? e.getAttribute("id") == a ? e : e.querySelectorAll(":scope " + a) : e.querySelectorAll(":scope " + n);
                    var i = t.className;
                    t.className = i + " " + o[n].join(" ")
                }
            }

            var i = {}, o = {};
            if ("undefined" != typeof e.getParentPage())var a = e.getParentPage().get("idName") + "-" + e.id; else if (e.id)var a = e.id; else var a = "placeholder" + Math.floor(1e4 * Math.random());
            var r = {
                addCSS: function (e, t, n) {
                    "undefined" == typeof n && (n = a), "undefined" == typeof i[n] && (i[n] = {}), i[n][e] = t
                }, addClass: function (e, t) {
                    "undefined" == typeof t && (t = a), "undefined" == typeof o[t] && (o[t] = []), o[t].push(e)
                }, stylize: function (e) {
                    t(e), n(e)
                }, getID: function () {
                    return a
                }
            };
            return r
        }
    };
    n.DomHelper = o, n.config(["ComponentTypesProvider", function (e) {
        e.add("app", {
            type: "core",
            list: false,
            name: "App",
            properties: {},
            obj: {canRedrawSingle: false, canDelete: false, canDuplicate: false, validChildren: []}
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("button-bar", {
            type: "button",
            name: "Button Bar",
            iconUrl: "/img/component-button-bar.png",
            weight: 0,
            properties: {
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                }, newProps: {list: false, type: "boolean", value: true}, skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: ["button"], addDefaultChildren: function () {
                    var e = this.create("button");
                    e.set("text", {value: "1"}), this.appendChild(e, true), e = this.create("button"), e.set("text", {value: "2"}), this.appendChild(e, true), e = this.create("button"), e.set("text", {value: "3"}), this.appendChild(e, true)
                }, dom: function (e, t) {
                    var i = e.element("<div></div>"), o = n.DomHelper.Styler(this), a = o.getID();
                    i[0].setAttribute("id", a), o.addClass("button-bar");
                    var r = this.get("class", "").split(" ");
                    for (var l in r)o.addClass(r[l]);
                    return o.stylize(i[0]), i[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("button", "ButtonComponent", {
            type: "button",
            name: "Button",
            iconUrl: "/img/component-button.png",
            weight: 0
        })
    }]).factory("ButtonComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("button", {
                link: {
                    title: "Type",
                    type: "route",
                    value: "",
                    category: "Link",
                    fullwidth: true,
                    weight: 0
                },
                linkView: {type: "string", value: "", list: false},
                text: {title: "Text", type: "string", value: "Tap me!", category: "Text", fullwidth: true, weight: 1},
                fontsize: {
                    title: "Size",
                    type: "int",
                    value: "",
                    placeholder: "Default",
                    unit: "px",
                    category: "Text",
                    weight: 2
                },
                alignment: {title: "Align", category: "Text", type: "align", value: "center", weight: 3, text: true},
                fontweight: {title: "Weight", type: "font-weight", value: null, category: "Text", weight: 4},
                fontcolor: {title: "Color", type: "color-picker", value: "", category: "Text", weight: 5},
                type: {
                    title: "Type",
                    type: "list",
                    value: "button-block",
                    options: [{value: "", text: "Inline"}, {
                        value: "button-block",
                        text: "Block"
                    }, {value: "button-clear", text: "Clear"}, {
                        value: "button-clear button-block",
                        text: "Clear and Block"
                    }, {value: "button-outline button-block", text: "Outline and Block"}, {
                        value: "button-outline",
                        text: "Outline"
                    }, {value: "button-icon", text: "Icon"}, {
                        value: "button-icon button-block",
                        text: "Icon and Block"
                    }],
                    category: "Style",
                    list: false
                },
                widthType: {
                    title: "Width",
                    type: "list2",
                    value: "block",
                    options: [{id: "inline", text: "Inline"}, {id: "block", text: "Block"}, {
                        id: "fullwidth",
                        text: "Full Width"
                    }],
                    category: "Style",
                    weight: 5
                },
                newType: {
                    title: "Type",
                    type: "list2",
                    value: "default",
                    options: [{id: "default", text: "Default"}, {id: "clear", text: "Clear"}, {
                        id: "outline",
                        text: "Outline"
                    }, {id: "icon", text: "Icon Only Style"}],
                    formatter: function (e) {
                        return '<div class="button-type-option ' + e.id + '"></div>'
                    },
                    formatterSelection: function (e) {
                        return e.text
                    },
                    category: "Style",
                    weight: 6
                },
                style: {
                    title: "Theme",
                    type: "theme-color",
                    help: "To customize these colors, open theming options by clicking on the paintbrush in the top right of your screen.",
                    value: "positive",
                    category: "Style",
                    weight: 7,
                    prefix: "button"
                },
                size: {
                    title: "Size",
                    type: "list",
                    value: "",
                    options: [{value: "button-large", text: "Large"}, {value: "button-small", text: "Small"}],
                    emptyText: "Standard",
                    category: "Style",
                    weight: 8
                },
                fullwidth: {
                    title: "Full Width",
                    type: "boolean",
                    value: false,
                    help: "Turn off padding on page too for full effect.",
                    category: "Style",
                    list: false
                },
                radius: {
                    title: "Radius",
                    type: "radius",
                    value: void 0,
                    category: "Style",
                    unit: "px",
                    placeholder: "Default",
                    weight: 9
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                icon: {title: "Icon", category: "Icon", type: "icon", value: "No Icon", fullwidth: true, weight: 11},
                iconposition: {title: "Position", category: "Icon", type: "align", value: "center", weight: 12},
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            }, {
                name: "Button", validChildren: [], canResizeX: true, canResizeY: true, canEdit: true, onRemove: function () {
                    window.Designer.AppGraph.removeLink(this)
                }, onInsert: function () {
                    window.Designer.AppGraph.addLink(this)
                }, commitEdit: function () {
                    this.text = this.$rendered.innerHTML
                }, icElement: function (e) {
                    return -1 == e.className.indexOf("button") ? e.children[0] : e
                }, dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID(), a = this.get("type", "");
                    if ("" !== a) {
                        var r = a.indexOf("button-block"), l = this.get("fullwidth", false);
                        r > -1 ? l ? this.set("widthType", "fullwidth") : this.set("widthType", "block") : this.set("widthType", "inline"), a.indexOf("button-clear") > -1 ? this.set("newType", "clear") : a.indexOf("button-outline") > -1 ? this.set("newType", "outline") : a.indexOf("button-icon") > -1 ? this.set("newType", "icon") : this.set("newType", "default"), this.set("type", "")
                    }
                    var s, d = t.createElement("button"), c = this.get("widthType");
                    switch (a = this.get("newType"), this.get("link", "") && (s = this.get("link"), d = t.createElement("a"), n.DomHelper.href(d, s, this)), d.setAttribute("id", o), -1 !== this.get("style").indexOf("button") && this.set("style", this.get("style").replace("button-", "")), i.addClass("button"), i.addClass("button-" + this.get("style", "positive")), i.addClass(this.get("size")), c) {
                        case"fullwidth":
                            if (i.addClass("button-full"), this.getParentPage().get("ionicpadding", true)) {
                                i.addCSS("left", "-10px");
                                var p = t.createElement("div");
                                p.setAttribute("style", "margin-right:-20px;"), p.appendChild(d)
                            }
                            break;
                        case"inline":
                            break;
                        case"block":
                            i.addClass("button-block")
                    }
                    "default" !== a && i.addClass("button-" + a);
                    var u = this.get("iconposition");
                    if (-1 != u.indexOf("icon"))switch (u) {
                        case"icon-left":
                            this.set("iconposition", "left");
                            break;
                        case"icon":
                            this.set("iconposition", "center");
                            break;
                        case"icon-right":
                            this.set("iconposition", "right")
                    }
                    var g = {left: "icon-left", center: "icon", right: "icon-right"};
                    u = g[u];
                    var h = this.get("icon");
                    if (u && "No Icon" != u && "No Icon" !== h && (i.addClass(u), i.addClass(h)), null !== this.get("fontweight", null)) {
                        "string" == typeof this.get("fontweight") && this.set("fontweight", {
                            weight: this.get("fontweight"),
                            italic: false
                        });
                        var m = this.get("fontweight");
                        "400" != m.weight && i.addCSS("font-weight", this.get("fontweight").weight), m.italic && i.addCSS("font-style", "italic")
                    }
                    "" !== this.get("fontcolor", "") && i.addCSS("color", this.get("fontcolor")), "" !== this.get("fontsize", "") && i.addCSS("font-size", this.get("fontsize") + "px");
                    var f = this.get("alignment", "center");
                    "center" !== f && i.addCSS("text-align", f);
                    var v = this.get("radius", void 0);
                    if ("undefined" != typeof v) {
                        var y = !("undefined" == typeof v.topleft_val || "" == v.topleft_val), w = !("undefined" == typeof v.topright_val || "" == v.topright_val), b = !("undefined" == typeof v.bottomright_val || "" == v.bottomright_val), C = !("undefined" == typeof v.bottomleft_val || "" == v.bottomleft_val);
                        if (0 != y || 0 != w || 0 != b || 0 != C) {
                            var $ = v.topleft_val ? v.topleft_val + "px" : "0px", S = v.topright_val ? v.topright_val + "px" : "0px", P = v.bottomright_val ? v.bottomright_val + "px" : "0px", x = v.bottomleft_val ? v.bottomleft_val + "px" : "0px";
                            i.addCSS("border-radius", $ + " " + S + " " + P + " " + x)
                        }
                    }
                    d.innerHTML = this.get("text");
                    var T = this.get("class", "").split(" ");
                    for (var D in T)i.addClass(T[D]);
                    return i.stylize(d), "undefined" != typeof p ? p : d
                }
            }));
            return t
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("card2", {
            type: "content",
            name: "Card",
            iconUrl: "/img/component-card.png",
            weight: 0,
            properties: {
                title: {title: "Title", type: "string", value: "Card", category: "Text", list: false},
                footer: {title: "Footer", type: "string", value: "", category: "Text", list: false},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                name: "Card", addDefaultChildren: function () {
                    var e = this.create("list-item-avatar");
                    this.appendChild(e, true);
                    var t = this.create("image");
                    this.appendChild(t, true);
                    var n = this.create("list-item-container"), i = this.create("markdown");
                    i.set("noPadding", false), n.appendChild(i, true), this.appendChild(n, true);
                    var o = this.create("list-item-icon");
                    o.set("theme", "assertive"), o.set("iconStyle", "ion-music-note"), o.set("content", "Play Song"), this.appendChild(o, true)
                }, dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID(), a = e.element('<div class="list card"></div>');
                    a[0].setAttribute("id", o);
                    var r = this.get("class", "").split(" ");
                    for (var l in r)i.addClass(r[l]);
                    return i.stylize(a[0]), a[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("checkbox", "CheckboxComponent", {
            type: "forms",
            name: "Checkbox",
            iconUrl: "/img/component-checkbox.png",
            weight: 0
        })
    }]).factory("CheckboxComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("checkbox", {
                title: {title: "Title", type: "string", value: "Checkbox"},
                name: {title: "Name", type: "string", value: ""}
            }, {
                name: "Checkbox",
                validChildren: [],
                needsCompile: true,
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                dom: function (e, t) {
                    var n = e.element("<ion-checkbox>" + this.get("title") + "</ion-checkbox>");
                    return this.get("name") && n.attr("name", this.get("name")), n[0]
                }
            }));
            return t
        }
    }]), n.run(["Action", function (e) {
        e.register("appendChild", {
            perform: function (e) {
                e.parent.appendChild(e.child)
            }, revert: function (e) {
                e.parent.removeChild(e.child)
            }
        }), e.register("insertChild", {
            perform: function (e) {
                e.parent.insertChild(e.child, e.index)
            }, revert: function (e) {
                e.parent.removeChild(e.child)
            }
        }), e.register("moveChild", {
            perform: function (e) {
                e.child.moveTo(e.newParent, e.newIndex)
            }, revert: function (e) {
                e.child.moveTo(e.oldParent, e.oldIndex)
            }
        }), e.register("removeChild", {
            perform: function (e) {
                e.oldParent.removeChild(e.child, e.isQuiet)
            }, revert: function (e) {
                e.oldParent.insertChild(e.child, e.oldIndex)
            }
        })
    }]).factory("Component", ["$rootScope", "Property", "ComponentTypes", "ComponentFactory", function (e, t, n, i) {
        return function (o, a, r) {
            return obj = {
                canSelect: true,
                canDelete: true,
                showSelectControls: true,
                type: o,
                properties: {
                    id: new t("id", {
                        category: "css",
                        title: "id",
                        type: "string",
                        value: "",
                        weight: 1,
                        list: false
                    }),
                    extraClasses: new t("extraClasses", {
                        category: "css",
                        title: "Extra Classes",
                        type: "string",
                        value: "",
                        weight: 2,
                        list: false
                    }),
                    width: new t("width", {
                        category: "css",
                        title: "Width",
                        type: "dimension",
                        value: "",
                        weight: 3,
                        list: false
                    }),
                    height: new t("height", {
                        category: "css",
                        title: "Height",
                        type: "dimension",
                        value: "",
                        weight: 4,
                        list: false
                    }),
                    margin: new t("margin", {
                        category: "css",
                        title: "Margin",
                        type: "margin",
                        value: {top: "", right: "", bottom: "", left: ""},
                        weight: 5,
                        list: false
                    }),
                    padding: new t("padding", {
                        category: "css",
                        title: "Padding",
                        type: "margin",
                        value: {top: "", right: "", bottom: "", left: ""},
                        weight: 6,
                        list: false
                    }),
                    skipcss: new t("skipcss", {type: "boolean", list: false, value: false}),
                    validChildren: new t("validChildren", {type: "list", list: false, value: void 0}),
                    validCategories: new t("validCategories", {type: "list", list: false, value: void 0})
                },
                children: [],
                validChildren: void 0,
                validCategories: void 0,
                recommendedParent: void 0,
                forceOneParent: [],
                id: null,
                _init: function () {
                },
                create: function (e) {
                    return i.create(e)
                },
                appendNew: function (e) {
                    this.appendChild(i.create(e))
                },
                addDefaultChildren: function () {
                },
                clone: function () {
                    return i.clone(this)
                },
                getId: function () {
                    return this.id
                },
                getParentPage: function () {
                    for (var e = null, t = this; null === e;) {
                        if (t = t.getParent(), "undefined" == typeof t)return void 0;
                        t.isPage && (e = t)
                    }
                    return e
                },
                getParent: function () {
                    return this.parent
                },
                setId: function (e) {
                    this.id = e
                },
                getTitle: function () {
                    return this.get("title", this.type)
                },
                acceptsChild: function (e) {
                    var t, i = n.get(e);
                    if (i && i.data.requiresParent) {
                        for (t = 0; t < i.data.requiresParent.length; t++)if (i.data.requiresParent[t] === this.type)return true;
                        return false
                    }
                    if ("undefined" != typeof this.validCategories) {
                        for (t = 0; t < this.validCategories.length; t++)if (this.validCategories[t] == i.data.type)return true;
                        return false
                    }
                    if ("undefined" != typeof this.validChildren) {
                        for (t = 0; t < this.validChildren.length; t++)if (this.validChildren[t] == e)return true;
                        return false
                    }
                    if ("" !== this.get("validCategories", "")) {
                        for (t = 0; t < this.get("validCategories").length; t++)if (this.get("validCategories")[t] == i.data.type)return true;
                        return false
                    }
                    if ("" !== this.get("validChildren", "")) {
                        for (t = 0; t < this.get("validChildren").length; t++)if (this.get("validChildren")[t] == e)return true;
                        return false
                    }
                    return true
                },
                get: function (e, t) {
                    "undefined" == typeof t && (t = "");
                    var n = this.properties[e];
                    return n && "undefined" != typeof n.value ? n.value : t
                },
                getProperty: function (e) {
                    return this.properties[e]
                },
                set: function (e, n) {
                    if (this.properties[e])"object" == typeof n && n.hasOwnProperty("value") ? this.properties[e].setValue(n.value) : this.properties[e].setValue(n); else {
                        var i = new t(e, n);
                        this.properties[e] = i
                    }
                },
                setFromMap: function (e) {
                    for (var t in e)this.properties[t] && this.properties[t].setValue(e[t])
                },
                setDefaultProperties: function (e) {
                    var t;
                    for (var n in e)t = e[n], this.set(n, t)
                },
                getProperties: function () {
                    return this.properties
                },
                getSortedProperties: function () {
                    var e = [];
                    for (var t in this.properties)this.properties[t].list !== false && e.push(this.properties[t]);
                    return e.sort(function (e, t) {
                        return e.weight || (e.weight = 0), t.weight || (t.weight = 0), e.weight - t.weight
                    }), e
                },
                _initChild: function (t, n, o) {
                    if ("undefined" != typeof t.recommendedParent && this.type != t.recommendedParent && -1 == t.forceOneParent.indexOf(this.type)) {
                        if ("undefined" == typeof o && (o = this.children.length - 1), -1 !== o && t.forceOneParent.indexOf(this.children[o].type) > -1)return this.children[o].appendChild(t), false;
                        var a = this.create(t.recommendedParent);
                        a.appendChild(t), t = a
                    }
                    return n || t.id || (t.id = i.newId(t.type), "RESETMEPLEASE" == t.get("url", "") && t.set("url", "/" + t.id), e.$emit("document.propertyChanged")), t
                },
                commitChildren: function () {
                    for (var t = (this.children.length, 0); t < this.children.length && (this.children[t] = this._initChild(this.children[t]), this.children[t] !== false); t++)e.$emit("component.registerChild", this.children[t], this)
                },
                appendChild: function (t, n) {
                    t = this._initChild(t, n), t !== false && (t.parent = this, this.children.push(t), e.$emit("component.childAdded", t, this, n))
                },
                removeChild: function (t, n) {
                    function i(e) {
                        "undefined" != typeof e.onRemove && e.onRemove();
                        for (var t = 0; t < e.children.length; t++)i(e.children[t])
                    }

                    for (var o = 0, a = this.children.length; a > o; o++)if (t === this.children[o])return this.children.splice(o, 1), t.parent = null, "undefined" != typeof this.updateChildLinks && this.updateChildLinks(), e.$emit("component.childRemoved", t, this, n), i(t), 0 != this.children.length || "form" != this.componentType && "list" != this.componentType || this.getParent().removeChild(this), t
                },
                insertChild: function (t, n, i) {
                    function o(e) {
                        "undefined" != typeof e.onInsert && e.onInsert();
                        for (var t = 0; t < e.children.length; t++)o(e.children[t])
                    }

                    t = this._initChild(t, i, n), t !== false && (t.parent = this, this.children.splice(n, 0, t), e.$emit("component.childAdded", t, this, i), o(t))
                },
                findChild: function (e) {
                    var t, n, i;
                    for (n = 0, i = this.children.length; i > n; n++)if (t = this.children[n], t.getId() === e)return t;
                    return null
                },
                getChildren: function (e) {
                    var t, n, i, o;
                    if ("undefined" != typeof e) {
                        for (o = [], n = 0, i = this.children.length; i > n; n++)t = this.children[n], t.type === e && o.push(t);
                        return o
                    }
                    return this.children
                },
                getChild: function (e) {
                    return this.children[e]
                },
                getChildIndex: function (e) {
                    var t, n, i;
                    for (n = 0, i = this.children.length; i > n; n++)if (t = this.children[n], t === e)return n;
                    return -1
                },
                getIndex: function () {
                    return this.parent.getChildIndex(this)
                },
                isChildOf: function (e) {
                    for (var t = e, n = this.parent; n && n !== t;)n = n.parent;
                    return n
                },
                replaceWith: function (t) {
                    var n = this.parent, i = n.getChildIndex(this);
                    n.removeChild(this), n.insertChild(t, i), t.setId(this.getId()), e.$emit("component.childReplaced", this, t)
                },
                moveTo: function (e, t) {
                    this.parent.removeChild(this), 0 > t ? e.appendChild(this) : e.insertChild(this, t)
                },
                dom: function (e, t) {
                    var n = t.createElement("div");
                    return n
                },
                getFromCompiled: function (e) {
                    return e
                },
                replaceRendered: function (e, t) {
                },
                onRender: function (e, t, n) {
                },
                setRendered: function (e, t) {
                    this.$rendered = e
                },
                getRendered: function () {
                    return this.$rendered
                },
                getRenderedChildren: function () {
                    return this.$rendered ? this.$rendered.children : []
                },
                getRenderedTarget: function () {
                    return this.$rendered
                },
                getRenderTarget: function (e) {
                    return e
                },
                insertRenderedIntoParent: function (e, t) {
                    e.appendChild(t)
                },
                getEditableNode: function () {
                    return this.$rendered
                },
                detachRendered: function () {
                },
                startResize: function () {
                    this.$rendered && (this._resizeStart = this.$rendered.getBoundingClientRect())
                },
                resize: function (e, t) {
                    if (this._resizeStart) {
                        var n = this._resizeStart.width, i = this._resizeStart.height;
                        this.$rendered.style.width = n + e + "px", this.$rendered.style.height = i + t + "px"
                    }
                },
                commitResize: function () {
                    this.set("width", this.$rendered.style.width), this.set("height", this.$rendered.style.height)
                },
                onClick: function () {
                },
                onSelect: function () {
                }
            }, obj.setDefaultProperties(a), angular.extend(obj, r), obj._init(), obj
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("form", {
            type: "forms",
            name: "Form",
            iconUrl: "/img/component-form.png",
            weight: 0,
            properties: {
                action: {title: "Action", type: "url", value: "", list: false},
                method: {title: "Method", type: "string", value: "", list: false},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                needsCompile: true, addDefaultChildren: function () {
                    console.log("ADD DEFAULT CHILDREN"),
                        console.trace();
                    var e = this.create("toggle");
                    this.appendChild(e, true), e = this.create("radio"), this.appendChild(e, true), e = this.create("input"), this.appendChild(e, true)
                }, dom: function (e, t) {
                    var i = t.createElement("form"), o = n.DomHelper.Styler(this), a = o.getID();
                    i.setAttribute("id", a), i.setAttribute("class", "list"), this.get("action") && i.setAttribute("action", this.get("action")), this.get("method") && i.setAttribute("method", this.get("method"));
                    var r = this.get("class", "").split(" ");
                    for (var l in r)o.addClass(r[l]);
                    return o.stylize(i), i
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("heading", {
            type: "1",
            name: "Heading",
            iconUrl: "/img/component-heading.png",
            weight: 0,
            properties: {
                text: {title: "Text", type: "string", value: "Heading", category: "Text", fullwidth: true},
                size: {
                    title: "Size",
                    type: "list",
                    value: "1",
                    options: [{value: "1", text: "H1"}, {value: "2", text: "H2"}, {value: "3", text: "H3"}, {
                        value: "4",
                        text: "H4"
                    }, {value: "5", text: "H5"}],
                    category: "Text"
                },
                fontcolor: {title: "Color", type: "color-picker", value: "#000000", category: "Text", weight: 3},
                fontweight: {
                    title: "Weight",
                    type: "font-weight",
                    value: null,
                    category: "Text",
                    weight: 2,
                    "default": "500"
                },
                alignment: {title: "Align", category: "Text", type: "align", value: "left", weight: 11, text: true},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true}
            },
            obj: {
                validChildren: [], canEdit: true, dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID(), a = t.createElement("h" + this.get("size", "1"));
                    if (a.innerHTML = this.get("text"), a.setAttribute("id", o), "" !== this.get("fontcolor", "") && i.addCSS("color", this.get("fontcolor")), null !== this.get("fontweight", null)) {
                        var r = this.get("fontweight");
                        "500" != r.weight && i.addCSS("font-weight", this.get("fontweight").weight), r.italic && i.addCSS("font-style", "italic")
                    }
                    var l = this.get("alignment", "left");
                    "left" !== l && i.addCSS("text-align", l);
                    var s = this.get("class", "").split(" ");
                    for (var d in s)i.addClass(s[d]);
                    return i.stylize(a), a
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("html", "HtmlComponent", {
            type: "content",
            name: "Html",
            iconUrl: "/img/component-html.png",
            weight: 0
        })
    }]).factory("HtmlComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("html", {
                content: {
                    title: "Content",
                    type: "html",
                    value: "<p>\n  Add some <b>HTML</b> for <u>flavor</u>\n  </p>"
                }
            }, {
                validChildren: [], dom: function (e, t) {
                    return e.element("<div>" + this.get("content") + "</div>")[0]
                }
            }));
            return t
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("image", {
            type: "content",
            name: "Image",
            iconUrl: "/img/component-image.png",
            weight: 0,
            properties: {
                link: {title: "Type", type: "route", value: "", category: "Link", fullwidth: true},
                src: {
                    title: "",
                    type: "urlupload",
                    value: "",
                    placeholder: "Image URL",
                    uploadText: "Choose Image...",
                    category: "Source",
                    autoheight: true,
                    fullwidth: true
                },
                linkView: {type: "string", value: "", list: false, category: "Link"},
                imgSize: {category: "Style", title: "Size", type: "size", value: void 0, weight: 2},
                imgwidth: {category: "Style", title: "Width", type: "dimension", value: "100%", weight: 3, list: false},
                imgheight: {category: "Style", title: "Height", type: "dimension", value: "auto", weight: 4, list: false},
                alignment: {title: "Position", category: "Style", type: "align", value: "center", weight: 5},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: [], onRemove: function () {
                    window.Designer.AppGraph.removeLink(this)
                }, onInsert: function () {
                    window.Designer.AppGraph.addLink(this)
                }, dom: function (e, t) {
                    if ("" != this.get("width") && this.set("width", ""), "" != this.get("height") && this.set("height", ""), "" != this.get("imgwidth") || "" != this.get("imgheight")) {
                        var i = this.get("imgwidth");
                        this.set("imgwidth", "");
                        var o = this.get("imgheight");
                        this.set("imgheight", ""), this.set("imgSize", {width: i, height: o, fullWidth: false})
                    }
                    "undefined" == typeof this.get("imgSize") && this.set("imgSize", {
                        width: "100%",
                        height: "auto",
                        fullWidth: false
                    });
                    var a = this.get("imgSize"), r = this.get("src");
                    if (r) {
                        var l = t.createElement("img");
                        if (window.multiFlag) {
                            var s = r.split("/");
                            s = s[s.length - 1], l.src = "img/" + s, window.downloads.push({
                                type: "img",
                                url: r,
                                name: s
                            })
                        } else l.src = r;
                        l.setAttribute("width", a.width), l.setAttribute("height", a.height), l.setAttribute("style", "display:block;");
                        var d = t.createElement("div");
                        d.className = this.get("class"), this.parent && "card2" == this.parent.componentType && (d.className = d.className + " item item-image");
                        var c = this.get("alignment", "center");
                        if ("left" == c || ("right" == c ? l.style["margin-left"] = "auto" : "center" == c ? (l.style["margin-left"] = "auto", l.style["margin-right"] = "auto") : (l.style["margin-left"] = "auto", l.style["margin-right"] = "auto")), a.fullWidth && this.getParentPage().get("ionicpadding", true) && (d.style["margin-left"] = "-10px", d.style.width = "calc(100% + 20px)"), this.get("link")) {
                            var p = t.createElement("a"), u = this.get("link");
                            return p.setAttribute("style", "display:block;"), n.DomHelper.href(p, u, this), d.appendChild(p), p.appendChild(l), d
                        }
                        return d.appendChild(l), d
                    }
                    var d = t.createElement("div"), g = t.createElement("i");
                    g.classList.add("icon"), g.classList.add("ion-image"), $(g).css({
                        fontSize: "64px",
                        color: "#888",
                        verticalAlign: "middle"
                    }), d.appendChild(g);
                    var h = "100%", m = "220px";
                    return this.get("width").indexOf("px") && (h = this.get("width")), this.get("height").indexOf("px") && (m = this.get("height")), $(d).css({
                        width: h,
                        height: m,
                        margin: "0px 0px",
                        lineHeight: "250px",
                        backgroundColor: "#e8ebef",
                        textAlign: "center"
                    }), d
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("input", "InputComponent", {
            type: "forms",
            name: "Input",
            weight: 1,
            iconUrl: "/img/component-input.png"
        })
    }]).factory("InputComponent", ["Component", function (t) {
        return function () {
            var i = Object.create(new t("input", {
                title: {
                    title: "Title",
                    type: "string",
                    value: "Input",
                    category: "Input Settings"
                },
                type: {
                    title: "Type",
                    type: "list2",
                    value: "text",
                    options: [{id: "text", text: "Text"}, {id: "password", text: "Password"}, {
                        id: "email",
                        text: "Email"
                    }, {id: "tel", text: "Phone #"}, {id: "number", text: "Number"}, {
                        id: "date",
                        text: "Date"
                    }, {id: "month", text: "Month"}, {id: "time", text: "Time"}],
                    category: "Input Settings"
                },
                placeholder: {title: "Placeholder", type: "string", value: "", category: "Input Settings"},
                name: {title: "Name", type: "string", value: "", category: "Input Settings"},
                labelstyle: {
                    title: "Label Style",
                    type: "list2",
                    value: "normal",
                    category: "Input Settings",
                    options: [{id: "normal", text: "Normal"}, {id: "floating", text: "Floating"}, {
                        id: "stacked",
                        text: "Stacked"
                    }]
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            }, {
                validChildren: [],
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                getEditableNode: function () {
                    return this.$rendered.querySelector(".input-label")
                },
                dom: function (t, i) {
                    var o = '<label class="item item-input">';
                    this.get("title") && (o = o + '<span class="input-label">' + this.get("title") + "</span>"), o = o + '<input type="' + this.get("type") + '" placeholder="' + e(this.get("placeholder")) + '"></label>';
                    var a = t.element(o), r = n.DomHelper.Styler(this), l = r.getID();
                    a[0].setAttribute("id", l), this.get("name") && a.attr("name", this.get("name")), "floating" == this.get("labelstyle", "normal") ? r.addClass("item-floating-label") : "stacked" == this.get("labelstyle", "normal") && r.addClass("item-stacked-label");
                    var s = this.get("class", "").split(" ");
                    for (var d in s)r.addClass(s[d]);
                    return r.stylize(a[0]), a[0]
                }
            }));
            return i
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("list-item-divider", "ListItemDividerComponent", {
            type: "list-item",
            name: "List Divider",
            weight: 1,
            iconUrl: "/img/component-list-divider.png"
        })
    }]).factory("ListItemDividerComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("list-item-divider", {
                content: {
                    title: "Content",
                    type: "string",
                    value: "Item",
                    category: "Text"
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            }, {
                needsCompile: true,
                forceOneParent: ["list", "form", "card2"],
                recommendedParent: "list",
                validChildren: [],
                dom: function (e, t) {
                    var i = e.element('<ion-item class="item-divider"> ' + this.get("content") + "</ion-item>"), o = n.DomHelper.Styler(this), a = o.getID();
                    i[0].setAttribute("id", a);
                    var r = this.get("class", "").split(" ");
                    for (var l in r)o.addClass(r[l]);
                    return o.stylize(i[0]), i[0]
                }
            }));
            return t
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("list-item-container", {
            type: "list-item",
            name: "Container List Item",
            weight: 1,
            iconUrl: "/img/component-paragraph.png",
            properties: {
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                }, newProps: {list: false, type: "boolean", value: true}
            },
            obj: {
                needsCompile: true, addDefaultChildren: function () {
                    var e = this.create("markdown");
                    e.set("noPadding", false), this.appendChild(e, true)
                }, dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID(), a = e.element('<div class="item item-body"></div>');
                    a[0].setAttribute("id", o);
                    var r = this.get("class", "").split(" ");
                    for (var l in r)i.addClass(r[l]);
                    return i.stylize(a[0]), a[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("list-item", "ListItemComponent", {
            type: "list-item",
            name: "List Item",
            weight: 1,
            iconUrl: "/img/component-list-item.png",
            list: true
        })
    }]).config(["ComponentTypesProvider", function (e) {
        e.addType("list-item-thumbnail2", "ListItemComponent", {
            type: "list-item",
            name: "Thumbnail List Item",
            weight: 1,
            iconUrl: "/img/component-list-thumbnail.png",
            list: true,
            overwriteValues: {type: "thumbnail"}
        })
    }]).config(["ComponentTypesProvider", function (e) {
        e.addType("list-item-icon", "ListItemComponent", {
            type: "list-item",
            name: "Icon List Item",
            weight: 1,
            iconUrl: "/img/component-list-icon.png",
            list: true,
            overwriteValues: {type: "icon"}
        })
    }]).config(["ComponentTypesProvider", function (e) {
        e.addType("list-item-avatar", "ListItemComponent", {
            type: "list-item",
            name: "Avatar List Item",
            weight: 1,
            iconUrl: "/img/component-list-avatar.png",
            list: true,
            overwriteValues: {type: "avatar"}
        })
    }]).factory("ListItemComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("list-item", {
                link: {
                    title: "Type",
                    type: "route",
                    value: "",
                    category: "Link",
                    fullwidth: true,
                    weight: 6
                },
                linkView: {type: "string", value: "", list: false},
                content: {title: "Content", type: "string", value: "Item", category: "Text", weight: 7},
                secondline: {
                    title: "Line #2", type: "string", value: "", category: "Text", ngShow: function (e) {
                        var t = e.get("type", "default");
                        return "thumbnail" == t || "avatar" == t
                    }, weight: 8
                },
                secondLineWordWrap: {
                    title: "Word Wrap",
                    type: "boolean",
                    value: false,
                    category: "Text",
                    ngShow: function (e) {
                        var t = e.get("type", "default");
                        return "thumbnail" == t || "avatar" == t
                    },
                    weight: 9
                },
                type: {
                    title: "Type",
                    type: "list2",
                    value: "default",
                    options: [{id: "default", text: "Regular"}, {id: "icon", text: "Icon"}, {
                        id: "avatar",
                        text: "Avatar"
                    }, {id: "thumbnail", text: "Thumbnail"}],
                    formatter: function (e) {
                        return e.text
                    },
                    formatterSelection: function (e) {
                        return e.text
                    },
                    category: "Style",
                    weight: 1
                },
                iconStyle: {
                    title: "Left Icon",
                    category: "Style",
                    type: "icon",
                    value: "ion-ionic",
                    ngShow: function (e) {
                        return "icon" == e.get("type", "default")
                    },
                    weight: 2
                },
                avatarImg: {
                    title: "",
                    type: "urlupload",
                    value: "",
                    uploadText: "Choose Avatar...",
                    fullwidth: true,
                    category: "Style",
                    autoheight: true,
                    ngShow: function (e) {
                        return "avatar" == e.get("type", "default")
                    },
                    weight: 3
                },
                thumbnailImg: {
                    title: "",
                    type: "urlupload",
                    value: "",
                    uploadText: "Choose Thumbnail...",
                    fullwidth: true,
                    category: "Style",
                    autoheight: true,
                    ngShow: function (e) {
                        return "thumbnail" == e.get("type", "default")
                    },
                    weight: 4
                },
                theme: {
                    title: "Theme",
                    type: "theme-color-allow-none",
                    value: "none",
                    category: "Style",
                    prefix: "",
                    weight: 5
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 6
                },
                note: {
                    title: "Note", type: "string", value: "", category: "Right Side", ngShow: function (e) {
                        var t = e.get("type", "default");
                        return "default" == t || "icon" == t
                    }, weight: 10
                },
                rightIcon: {title: "Icon", category: "Right Side", type: "icon", value: "No Icon", weight: 11},
                rightAccessory: {
                    title: "Accessory",
                    category: "Right Side",
                    type: "boolean",
                    value: false,
                    help: "Makes right icon smaller and gray",
                    weight: 12
                },
                style: {title: "Style", type: "string", value: "", list: false},
                newProps: {list: false, type: "boolean", value: true}
            }, {
                validChildren: [],
                forceOneParent: ["list", "form", "card2"],
                recommendedParent: "list",
                toString: function () {
                    return "ListItemComponent"
                },
                needsCompile: true,
                onRemove: function () {
                    window.Designer.AppGraph.removeLink(this)
                },
                onInsert: function () {
                    window.Designer.AppGraph.addLink(this)
                },
                dom: function (e, t) {
                    function i() {
                        if ("" !== u.get("content", "")) {
                            if (c); else;
                            d = d + "<h2" + c + ">" + u.get("content") + "</h2>"
                        }
                    }

                    function o() {
                        if ("" !== u.get("secondline", "")) {
                            var e = "";
                            u.get("secondLineWordWrap", false) && (e = ' style="white-space:normal;"'), d = d + "<p" + e + ">" + u.get("secondline") + "</p>"
                        }
                    }

                    function a(e, t) {
                        if (window.multiFlag) {
                            if (e) {
                                var n = e.split("/");
                                n = n[n.length - 1], window.downloads.push({
                                    type: "img",
                                    url: e,
                                    name: n
                                }), d = d + '<img src="img/' + n + '" />'
                            }
                        } else e || (e = t), d = d + '<img src="' + e + '" />'
                    }

                    function r() {
                        "" !== u.get("note", "") && (d = d + '<span class="item-note">' + u.get("note") + "</span>")
                    }

                    var l = this.get("type", "default"), s = [], d = "";
                    switch (l) {
                        case"icon":
                            s.push("item-icon-left");
                            break;
                        case"avatar":
                            s.push("item-avatar");
                            break;
                        case"thumbnail":
                            s.push("item-thumbnail-left")
                    }
                    "No Icon" !== this.get("rightIcon", "No Icon") && s.push("item-icon-right");
                    var c = "";
                    if ("none" !== this.get("theme", "none") && (c = this.get("theme"), s.push(this.get("theme"))), 0 == s.length)var p = ""; else var p = ' class="' + s.join(" ") + '"';
                    d = d + "<ion-item" + p + ">";
                    var u = this;
                    switch (l) {
                        case"default":
                            d += this.get("content"), r();
                            break;
                        case"icon":
                            d = d + '<i class="icon ' + this.get("iconStyle", "ion-ionic") + '"></i>', d += this.get("content"), r();
                            break;
                        case"avatar":
                            a(this.get("avatarImg", ""), "/img/avatar-img.png"), i(), o();
                            break;
                        case"thumbnail":
                            a(this.get("thumbnailImg", ""), "/img/thumbnail-img.png"), i(), o()
                    }
                    if ("No Icon" !== this.get("rightIcon", "No Icon")) {
                        var g = "";
                        1 == this.get("rightAccessory", false) && (g = " icon-accessory"), d = d + '<i class="icon ' + this.get("rightIcon", "ion-ionic") + g + '"></i>'
                    }
                    d += "</ion-item>";
                    var h = e.element(d), m = n.DomHelper.Styler(this), f = m.getID();
                    h[0].setAttribute("id", f), this.get("link", "") && (link = this.get("link"), n.DomHelper.href(h[0], link, this)), m.addClass(this.get("style"));
                    var v = this.get("class", "").split(" ");
                    for (var y in v)m.addClass(v[y]);
                    return m.stylize(h[0]), h[0]
                }
            }));
            return t
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("list", {
            type: "list-item",
            name: "List",
            weight: 0,
            iconUrl: "/img/component-list.png",
            properties: {
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                }, newProps: {list: false, type: "boolean", value: true}, skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: ["list-item", "input", "toggle"],
                validCategories: ["forms", "list-item"],
                toString: function () {
                    return "ListComponent"
                },
                getRenderedChildren: function () {
                    return this.$rendered.children[0].children
                },
                getRenderedTarget: function () {
                    return this.$rendered.children[0]
                },
                addDefaultChildren: function () {
                    console.log("ADD DEFAULT CHILDREN"), console.trace();
                    var e = this.create("list-item");
                    e.set("content", {value: "Item 1"}), this.appendChild(e, true), e = this.create("list-item"), e.set("content", {value: "Item 2"}), this.appendChild(e, true), e = this.create("list-item"), e.set("content", {value: "Item 3"}), this.appendChild(e, true)
                },
                dom: function (e, t) {
                    var i = t.createElement("ion-list"), o = n.DomHelper.Styler(this), a = o.getID();
                    i.setAttribute("id", a);
                    var r = this.get("class", "").split(" ");
                    for (var l in r)o.addClass(r[l]);
                    return o.stylize(i), i
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("map", {
            type: "content",
            name: "Map",
            iconUrl: "/img/component-map.png",
            weight: 0,
            list: false,
            properties: {
                apikey: {
                    type: "string",
                    title: "Google API Key",
                    value: "AIzaSyAmWKu2TCoUl8zKuC19VjDGmw7bUXdXKQo"
                },
                location: {type: "string", title: "Location", value: ""},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: [], dom: function (e, t) {
                    var n = this.get("location", ""), i = this.get("apikey", "");
                    n || (n = "Madison Capital");
                    var o = '<div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;"><iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=' + i + "&q=" + encodeURI(n) + '" allowfullscreen></iframe>';
                    return window.compiling || (o += '<div style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>'), o += "</div>", e.element(o)[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("nav", {
            type: "nav",
            name: "Nav",
            weight: 0,
            list: false,
            properties: {
                style: {
                    title: "Style",
                    type: "button-styles",
                    value: "bar-stable",
                    options: [{value: "", text: "Default", color: "#fff"}, {
                        value: "bar-light",
                        text: "Light",
                        color: "#fff"
                    }, {value: "bar-stable", text: "Stable", color: "#f8f8f8"}, {
                        value: "bar-dark",
                        text: "Dark",
                        color: "#444"
                    }, {value: "bar-positive", text: "Positive", color: "#4a87ee"}, {
                        value: "bar-balanced",
                        text: "Balanced",
                        color: "#66cc33"
                    }, {value: "bar-assertive", text: "Assertive", color: "#ef4e3a"}, {
                        value: "bar-calm",
                        text: "Calm",
                        color: "#43cee6"
                    }, {value: "bar-energized", text: "Energized", color: "#f0b840"}, {
                        value: "bar-royal",
                        text: "Royal",
                        color: "#8a6de9"
                    }]
                }
            },
            obj: {
                isContainer: true,
                canDuplicate: false,
                canDelete: false,
                canSelect: false,
                disableDragging: true,
                validChildren: [],
                needsCompile: true,
                getRenderTarget: function (e) {
                    return e.querySelector("ion-nav-view")
                },
                getRenderedTarget: function () {
                    return this.$rendered.querySelector("ion-nav-view")
                },
                dom: function (e, t) {
                    if ("sidemenutabs" == window.Designer.getExtra("appType") && window.compiling)return window.DocumentRenderer.renderChildTree(window.Designer.getById("side-menu21"));
                    var n = "bar-" + window.Designer.Themes.settings.headerBackgroundTheme;
                    if ("side-menu2" == window.Designer.getActivePage().componentType)var n = "bar-" + window.Designer.Themes.settings.sideMenuHeaderBackgroundTheme;
                    var i = e.element('<div><ion-nav-bar><ion-nav-back-button class="button-icon icon ion-ios-arrow-back">Back</ion-nav-back-button></ion-nav-bar><ion-nav-view></ion-nav-view></div>'), o = i.find("ion-nav-bar");
                    return o.addClass(n), i[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("page", {
            type: "page",
            name: "Page",
            weight: 0,
            list: false,
            properties: {
                parentState: {type: "string", list: false, value: ""},
                outlineIcon: {type: "string", list: false, value: ""},
                parentView: {type: "string", list: false, value: ""},
                idName: {type: "string", list: false, value: ""},
                "abstract": {type: "boolean", list: false, value: false},
                hasContent: {
                    type: "boolean",
                    title: "Has Content",
                    value: true,
                    placeholder: "Page title",
                    weight: 1,
                    list: false
                },
                title: {
                    type: "string",
                    title: "Title",
                    value: "",
                    placeholder: "Page title",
                    weight: 1,
                    onchange: function () {
                        window.Designer.AppGraph._save()
                    }
                },
                url: {type: "slashurl", title: "Routing URL", value: "", weight: 1, placeholder: "URL", advanced: true},
                routeViews: {list: false, value: ""},
                previewPage: {value: "", list: false},
                ionicpadding: {title: "Padding", type: "boolean", value: true, weight: 3, category: "Miscellaneous"},
                scroll: {title: "Scrolling", type: "boolean", value: true, weight: 4, category: "Miscellaneous"},
                backgroundColor: {title: "Color", type: "color-picker", value: "", category: "Background", weight: 2},
                backgroundImg: {
                    type: "urlupload",
                    value: "",
                    placeholder: "Image URL",
                    uploadText: "Choose Image...",
                    weight: 3,
                    category: "Background",
                    autoheight: true,
                    fullwidth: true
                },
                disableBackButton: {
                    title: "Disable Back Button",
                    type: "boolean",
                    value: false,
                    weight: 5,
                    category: "Miscellaneous"
                },
                hideHeader: {title: "Hide Header", type: "boolean", value: false, weight: 6, category: "Miscellaneous"},
                hasHeader: {title: "Header Margin", type: "boolean", value: true, weight: 7, category: "Miscellaneous"},
                hasFooter: {
                    title: "Footer Margin",
                    type: "boolean",
                    value: false,
                    weight: 8,
                    category: "Miscellaneous",
                    list: false
                },
                disableParenting: {
                    title: "Disable Parenting",
                    type: "boolean",
                    value: false,
                    weight: 9,
                    help: "Removes Tabs or Side Menus that were added automatically. Side Menus in the Side-Menu+Tabs project cannot be removed in Creator.",
                    onchange: function () {
                        window.Designer.AppGraph._save()
                    },
                    category: "Miscellaneous"
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Miscellaneous",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                info: {list: false}
            },
            obj: {
                isContainer: true,
                canDuplicate: false,
                showSelectControls: false,
                disableDragging: true,
                isPage: true,
                canRedrawSingle: false,
                needsCompile: true,
                onRemove: function () {
                    window.Designer.AppGraph.removePage(this)
                },
                updateChildLinks: function () {
                },
                getFullPageUrl: function () {
                    function e(t) {
                        return t = window.Designer.getById(t), t ? "" != t.get("parentState") ? e(t.get("parentState")) + t.get("url") : t.get("url") : ""
                    }

                    return "" != this.get("parentState") ? e(this.get("parentState")) + this.get("url") : this.get("url")
                },
                replaceRendered: function (e, t) {
                    this.get("scroll") && this.get("ionicpadding") && t(e.querySelector(".scroll")).addClass("padding")
                },
                getRenderTarget: function (e) {
                    return e.querySelector("ion-content")
                },
                getRenderedTarget: function () {
                    return this.get("scroll") === true ? this.$rendered.querySelector(".scroll") : this.$rendered.querySelector("ion-content")
                },
                getRenderedChildren: function () {
                    return this.get("scroll") === true ? this.$rendered.children[0].children[0].children : this.$rendered.children[0].children
                },
                afterId: function () {
                    console.log("PAGE AFTER ID", this), this.set("url", "/" + this.getId())
                },
                dom: function (e, t) {
                    if (Designer.featureCheck("!automagic-navigation") && 1 == this.get("disableParenting", false) && "" !== this.get("parentView")) {
                        var i = Designer.getById(this.get("parentView"));
                        if ("undefined" != typeof i) {
                            var o = i.get("pages"), a = [];
                            if ("undefined" != typeof o.pages) {
                                for (var r = 0; r < o.pages.length; r++)o.pages[r].id != this.getId() && a.push(o.pages[r]);
                                i.set("pages", {pages: a})
                            }
                        }
                        this.set("parentView", ""), this.set("parentState", "")
                    }
                    var l = this.get("hideHeader", false), s = "";
                    l && (s = ' hide-nav-bar="true"');
                    var d = this.get("disableBackButton", false), c = "";
                    d && (c = ' hide-back-button="true"');
                    var p = this.get("hasHeader", false), u = (this.get("hasFooter", false), e.element('<ion-view title="' + this.get("title", "Page") + '"' + s + c + "></ion-view>")), g = n.DomHelper.Styler(this), h = g.getID();
                    u[0].setAttribute("id", h);
                    var m = '<ion-content padding="' + this.get("ionicpadding") + '"';
                    if ("" != this.get("backgroundImg", "")) {
                        var f = this.get("backgroundImg");
                        if (window.multiFlag) {
                            var v = f.split("/");
                            v = encodeURIComponent(v[v.length - 1]), f = "img/" + v, window.downloads.push({
                                type: "img",
                                url: this.get("backgroundImg"),
                                name: v
                            })
                        }
                        f = f.split("/"), f[f.length - 1] = encodeURIComponent(f[f.length - 1]), f = f.join("/"), m = m + ' style="background: url(' + f + ') no-repeat center;background-size:cover;"'
                    }
                    "" != this.get("backgroundColor", "") && g.addCSS("background-color", this.get("backgroundColor"));
                    var y = "";
                    l && p && (y = "manual-ios-statusbar-padding"), p || (y += " manual-remove-top-padding"), "" !== y && (m = m + 'class="' + y + '"'), m += "></ion-content>";
                    var w = e.element(m);
                    this.get("scroll", true) === false && w.attr("scroll", "false"), l || w.addClass("has-header"), this.get("hasContent", true) && u.append(w);
                    var b = this.get("class", "").split(" ");
                    for (var r in b)g.addClass(b[r]);
                    return g.stylize(u[0]), u[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("markdown", "MarkdownComponent", {
            type: "1",
            name: "Paragraph",
            weight: 1,
            iconUrl: "/img/component-paragraph.png"
        })
    }]).factory("MarkdownComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("markdown", {
                fontsize: {
                    title: "Size",
                    type: "int",
                    value: "",
                    placeholder: "Default",
                    unit: "px",
                    category: "Text"
                },
                fontcolor: {title: "Color", type: "color-picker", value: "#000000", category: "Text"},
                alignment: {title: "Align", category: "Text", type: "align", value: "left", text: true},
                content: {
                    title: "Content",
                    help: "Markdown format supported.",
                    type: "editor",
                    language: "markdown",
                    value: "Some friendly **markdown**",
                    category: "Text"
                },
                noPadding: {title: "Padding", type: "boolean", value: true, category: "Style"},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            }, {
                needsCompile: true, validChildren: [], dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID(), a = markdown.toHTML(this.get("content")), r = e.element(a);
                    "undefined" == typeof r[0] && (r = e.element("<p></p>")), r[0].setAttribute("id", o), 0 == this.get("noPadding") && i.addCSS("margin-top", "0px"), "" !== this.get("fontcolor", "") && i.addCSS("color", this.get("fontcolor")), "" !== this.get("fontsize", "") && i.addCSS("font-size", this.get("fontsize") + "px");
                    var l = this.get("alignment", "left");
                    "left" !== l && i.addCSS("text-align", l);
                    var s = this.get("class", "").split(" ");
                    for (var d in s)i.addClass(s[d]);
                    return i.stylize(r[0]), r[0]
                }
            }));
            return t
        }
    }]), n.factory("Property", function () {
        return function (e, t) {
            var n = {
                getKey: function () {
                    return e
                }, setValue: function (e) {
                    this.value = e
                }
            };
            return angular.extend(n, t), n
        }
    }), n.config(["ComponentTypesProvider", function (e) {
        e.add("radio", {
            type: "forms",
            name: "Radio",
            iconUrl: "/img/component-radio.png",
            weight: 3,
            properties: {
                title: {title: "Title", type: "string", value: "Radio", category: "Text"},
                name: {title: "Name", type: "string", value: "", category: "Text"},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: [],
                needsCompile: true,
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                dom: function (e, t) {
                    var i = e.element("<ion-radio>" + this.get("title") + "</ion-radio>"), o = n.DomHelper.Styler(this), a = o.getID();
                    i[0].setAttribute("id", a), this.get("name") && i.attr("name", this.get("name"));
                    var r = this.get("class", "").split(" ");
                    for (var l in r)o.addClass(r[l]);
                    return o.stylize(i[0]), i[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("range", {
            type: "forms",
            name: "Range",
            iconUrl: "/img/component-range.png",
            weight: 4,
            properties: {
                title: {title: "Title", type: "string", value: "Range", category: "Text"},
                name: {title: "Name", type: "string", value: "", category: "Text"},
                min: {title: "Min", type: "int", value: 0, category: "Slider"},
                max: {title: "Max", type: "int", value: 100, category: "Slider"},
                value: {title: "Value", type: "int", value: 50, category: "Slider"},
                style: {
                    title: "Style",
                    type: "theme-color",
                    help: "To customize these colors, open theming options by clicking on the paintbrush in the top right of your screen.",
                    value: "positive",
                    category: "Style"
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: [],
                needsCompile: true,
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                dom: function (e, t) {
                    this.get("style").indexOf("range-") > -1 && this.set("style", this.get("style").replace("range-", ""));
                    var i = e.element('<ion-item class="range"><input type="range" value="' + this.get("value") + '"></ion-item>'), o = n.DomHelper.Styler(this), a = o.getID();
                    i[0].setAttribute("id", a);
                    var r = e.element(i.children(0));
                    r.attr("min", this.get("min", 0)), r.attr("max", this.get("max", 100)), this.get("name") && r.attr("name", this.get("name")), i.addClass("range-" + this.get("style")), i.prepend(this.get("title"));
                    var l = this.get("class", "").split(" ");
                    for (var s in l)o.addClass(l[s]);
                    return o.stylize(i[0]), i[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (t) {
        t.add("search", {
            type: "forms",
            name: "Search",
            iconUrl: "/img/component-search.png",
            weight: 2,
            properties: {
                placeholder: {title: "Placeholder", type: "string", value: ""},
                name: {title: "Name", type: "string", value: ""}
            },
            obj: {
                validChildren: [],
                needsCompile: true,
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                dom: function (t, n) {
                    var i = t.element('<label class="item item-input"><i class="icon ion-search placeholder-icon"></i><input type="search" placeholder="' + e(this.get("placeholder")) + '"></label>');
                    return this.get("name") && i.attr("name", this.get("name")), i[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("select", {
            type: "forms",
            name: "Select",
            iconUrl: "/img/component-select.png",
            weight: 4,
            properties: {
                title: {title: "Title", type: "string", value: "Select", category: "Text"},
                name: {title: "Name", type: "string", value: "", category: "Text"},
                placeholder: {title: "Placeholder", type: "string", value: "", list: false, category: "Text"},
                options: {
                    title: "Options",
                    type: "textlist",
                    value: "",
                    category: "Options",
                    fullwidth: true,
                    autoheight: true
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: [],
                needsCompile: true,
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                dom: function (e, t) {
                    var i = '<label class="item item-select"><span class="input-label">' + this.get("title") + "</span><select>", o = this.get("options", {options: []});
                    if ("undefined" != typeof o.length) {
                        this.set("options", {options: []});
                        var o = {options: []}
                    }
                    for (var a = 0; a < o.options.length; a++)i = i + "<option>" + o.options[a].value + "</option>";
                    i += "</select></label>";
                    var r = e.element(i), l = n.DomHelper.Styler(this), s = l.getID();
                    r[0].setAttribute("id", s), this.get("name") && r.attr("name", this.get("name"));
                    var d = this.get("class", "").split(" ");
                    for (var a in d)l.addClass(d[a]);
                    return l.stylize(r[0]), r[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("side-menu2", {
            type: "page",
            name: "Side Menu",
            weight: 0,
            list: false,
            properties: {
                parentState: {type: "string", list: false, value: ""},
                sidemenu: {type: "boolean", value: true, list: false},
                outlineIcon: {type: "string", list: false, value: ""},
                parentView: {type: "string", list: false, value: ""},
                idName: {type: "string", list: false, value: ""},
                "abstract": {type: "boolean", list: false, value: true},
                tabsHack: {type: "boolean", list: false, value: true},
                hasContent: {
                    type: "boolean",
                    title: "Has Content",
                    value: true,
                    placeholder: "Page title",
                    weight: 1,
                    list: false
                },
                title: {
                    type: "string",
                    title: "Title",
                    value: "",
                    placeholder: "Page title",
                    weight: 1,
                    onchange: function () {
                        window.Designer.AppGraph._save()
                    }
                },
                url: {type: "slashurl", title: "Routing URL", value: "", weight: 1, placeholder: "URL", advanced: true},
                previewPage: {value: "", list: false},
                side: {
                    title: "Menu Side",
                    value: "left",
                    weight: 2,
                    type: "list",
                    options: [{value: "left", text: "Left"}, {value: "right", text: "Right"}],
                    hideEmpty: true
                },
                root: {value: false, list: false, type: "boolean"},
                defaultPage: {
                    title: "Default Page",
                    type: "defaultpage",
                    value: "",
                    feature: "automagic-navigation",
                    weight: 2,
                    list: false
                },
                exposeAsideWhen: {
                    title: "Keep Open when Large",
                    type: "boolean",
                    value: false,
                    weight: 3,
                    category: "Miscellaneous",
                    list: false
                },
                ionicpadding: {title: "Padding", type: "boolean", value: false, weight: 5, category: "Miscellaneous"},
                scroll: {title: "Scrolling", type: "boolean", value: true, weight: 6, category: "Miscellaneous"},
                backgroundColor: {title: "Color", type: "color-picker", value: "", category: "Background", weight: 2},
                backgroundImg: {
                    type: "urlupload",
                    value: "",
                    placeholder: "Image URL",
                    uploadText: "Upload Image",
                    weight: 3,
                    category: "Background",
                    autoheight: true,
                    fullwidth: true
                },
                enableBack: {
                    title: "Enable with Back Views",
                    type: "boolean",
                    value: false,
                    weight: 4,
                    category: "Miscellaneous",
                    help: "Still show the Side Menu icon even if you're in a view with a back button."
                },
                hasHeader: {title: "Header Margin", type: "boolean", value: true, weight: 7, category: "Miscellaneous"},
                hasFooter: {
                    title: "Footer Margin",
                    type: "boolean",
                    value: false,
                    weight: 8,
                    category: "Miscellaneous",
                    list: false
                },
                pages: {title: "Pages", type: "pages", value: "", list: false},
                disableParenting: {
                    title: "Disable Parenting",
                    type: "boolean",
                    value: true,
                    list: false,
                    category: "Miscellaneous"
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Miscellaneous",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true}
            },
            obj: {
                isContainer: true,
                canDuplicate: false,
                canDelete: false,
                disableDragging: true,
                isPage: true,
                canRedrawSingle: false,
                info: "Only one menu per app is allowed, Menu cannot be deleted or duplicated.",
                needsCompile: true,
                updateChildLinks: function () {
                    function e(n) {
                        for (var i = 0; i < n.children.length; i++) {
                            var o = n.children[i];
                            o.get("link", false) && t.push(o.get("link")), o.children.length > 0 && e(o)
                        }
                    }

                    if (window.Designer.featureCheck("!automagic-navigation")) {
                        var t = [];
                        e(this);
                        for (var n = window.Designer.getPages(), i = 0; i < n.length; i++) {
                            var o = n[i];
                            o.get("parentState") == this.getId() && -1 == t.indexOf(o.getId()) && (o.set("parentState", ""), o.set("parentView", "")), "" !== o.get("parentState", "") && o.get("parentState", "") !== this.getId() && -1 !== t.indexOf(o.getId()) && t.splice(t.indexOf(o.getId()), 1)
                        }
                        for (var a = {pages: []}, i = 0; i < t.length; i++) {
                            var o = window.Designer.getById(t[i]);
                            0 == o.get("disableParenting", false) && (o.set("parentState", this.getId()), o.set("parentView", this.getId()), a.pages.push({id: t[i]}))
                        }
                        this.set("pages", a)
                    }
                },
                getFullPageUrl: function () {
                    function e(t) {
                        return t = window.Designer.getById(t), "" != t.get("parentState") ? e(t.get("parentState")) + t.get("url") : t.get("url")
                    }

                    return "" != this.get("parentState") ? e(this.get("parentState")) + this.get("url") : this.get("url")
                },
                replaceRendered: function (e, t) {
                    this.get("scroll") && this.get("ionicpadding") && t(e.querySelector(".scroll")).addClass("padding")
                },
                getRenderTarget: function (e) {
                    return e.querySelector("ion-content")
                },
                getRenderedTarget: function () {
                    return this.get("scroll") === true ? this.$rendered.querySelector(".scroll") : this.$rendered.querySelector("ion-content")
                },
                getRenderedChildren: function () {
                    return this.get("scroll") === true ? this.$rendered.children[0].children[0].children : this.$rendered.children[0].children
                },
                addDefaultChildren: function () {
                    if (window.Designer.featureCheck("automagic-navigation")) {
                        if (0 == this.get("root", false)) {
                            var e = window.Designer.addPage();
                            e.set("url", "/" + e.getId()), e.set("title", "Home");
                            var t = this.create("list-item");
                            t.set("content", "Home"), t.set("link", e.getId()), this.appendChild(t, true), window.Designer.AppGraph.addLink(t), window.Designer.setExtra("startingPage", e.getId());
                            var n = window.Designer.addPage();
                            n.set("url", "/" + n.getId()), n.set("title", "Cart");
                            var i = this.create("list-item");
                            i.set("content", "Cart"), i.set("link", n.getId()), this.appendChild(i, true), window.Designer.AppGraph.addLink(i);
                            var o = window.Designer.addPage();
                            o.set("url", "/" + o.getId()), o.set("title", "Cloud");
                            var a = this.create("list-item");
                            a.set("content", "Cloud"), a.set("link", o.getId()), this.appendChild(a, true), window.Designer.AppGraph.addLink(a)
                        }
                    } else {
                        var t = this.create("list-item");
                        t.set("content", "Item 1"), this.appendChild(t, true);
                        var i = this.create("list-item");
                        i.set("content", "Item 2"), this.appendChild(i, true);
                        var a = this.create("list-item");
                        a.set("content", "Item 3"), this.appendChild(a, true)
                    }
                },
                afterId: function () {
                    console.log("PAGE AFTER ID", this), this.set("url", "/" + this.getId())
                },
                dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID();
                    if (window.compiling) {
                        var a = this.get("side", "left");
                        "" == a && (a = "left");
                        var r = "";
                        this.get("exposeAsideWhen", true) && (r = ' expose-aside-when="large"');
                        var l = 'enable-menu-with-back-views="false"';
                        this.get("enableBack", false) && (l = 'enable-menu-with-back-views="true"');
                        var s = 'name="' + this.getId() + '"';
                        "sidemenutabs" == window.Designer.getExtra("appType") && (s = "");
                        var d = "<ion-side-menus " + l + '><ion-side-menu-content><ion-nav-bar class="bar-' + window.Designer.Themes.settings.headerBackgroundTheme + '"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side="' + a + '"><button class="button button-icon button-clear ion-navicon" menu-toggle="' + a + '"></button></ion-nav-buttons></ion-nav-bar><ion-nav-view ' + s + '></ion-nav-view></ion-side-menu-content><ion-side-menu side="' + a + '" id="' + o + '"' + r + '><ion-header-bar class="bar-' + window.Designer.Themes.settings.sideMenuHeaderBackgroundTheme + '"><div class="title">' + this.get("title", "Page") + '</div></ion-header-bar><ion-content padding="' + this.get("ionicpadding") + '" class="side-menu-' + a + ' has-header"';
                        if ("" != this.get("backgroundImg", "")) {
                            var c = this.get("backgroundImg");
                            if (window.multiFlag) {
                                var p = c.split("/");
                                p = encodeURIComponent(p[p.length - 1]), c = "img/" + p, window.downloads.push({
                                    type: "img",
                                    url: this.get("backgroundImg"),
                                    name: p
                                })
                            }
                            c = c.split("/"), c[c.length - 1] = encodeURIComponent(c[c.length - 1]), c = c.join("/"), d = d + ' style="background: url(' + c + ') no-repeat center;"'
                        }
                        d += "></ion-content></ion-side-menu></ion-side-menus>";
                        var u = e.element(d);
                        "" != this.get("backgroundColor", "") && i.addCSS("background-color", this.get("backgroundColor"));
                        var g = this.get("class", "").split(" ");
                        for (var h in g)i.addClass(g[h]);
                        return i.stylize(u[0]), u[0]
                    }
                    var m = e.element('<ion-view title="' + this.get("title", "Page") + '"></ion-view>');
                    m[0].setAttribute("id", o);
                    var f = "<ion-content padding=\"'" + this.get("ionicpadding") + "'\"";
                    if ("" != this.get("backgroundImg", "")) {
                        var c = this.get("backgroundImg");
                        if (window.multiFlag) {
                            var p = c.split("/");
                            p = encodeURIComponent(p[p.length - 1]), c = "img/" + p, window.downloads.push({
                                type: "img",
                                url: this.get("backgroundImg"),
                                name: p
                            })
                        }
                        c = c.split("/"), c[c.length - 1] = encodeURIComponent(c[c.length - 1]), c = c.join("/"), f = f + ' style="background: url(' + c + ') no-repeat center;background-size:cover;"'
                    }
                    "" != this.get("backgroundColor", "") && i.addCSS("background-color", this.get("backgroundColor")), f += "></ion-content>";
                    var v = e.element(f);
                    this.get("scroll", true) === false && v.attr("scroll", "false");
                    var y = this.get("hasHeader", false), w = this.get("hasFooter", false);
                    y && v.addClass("has-header"), w && v.addClass("has-footer"), this.get("hasContent", true) && m.append(v);
                    var g = this.get("class", "").split(" ");
                    for (var h in g)i.addClass(g[h]);
                    return i.stylize(m[0]), m[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("spacer", {
            type: "content",
            name: "Spacer",
            iconUrl: "/img/component-spacer.png",
            weight: 0,
            properties: {
                width: {title: "Width", type: "dimension", value: ""},
                height: {title: "Height", type: "dimension", value: "100px"}
            },
            obj: {
                validChildren: [], needsCompile: true, canResizeY: true, dom: function (e, t) {
                    var n = e.element('<div class="spacer"></div>');
                    return "block" !== this.get("display") && n.css("display", this.get("display")), this.get("width") && n.css({width: this.get("width")}), this.get("height") && n.css({height: this.get("height")}), n[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("tab", {
            type: "tabs",
            name: "Tab",
            weight: 0,
            list: false,
            requiresParent: ["tabs"],
            properties: {
                title: {
                    title: "Title",
                    type: "string",
                    value: "Tab",
                    scopeField: "title",
                    category: "Tab Settings"
                },
                icon: {title: "Icon", type: "icon", value: "ion-ios-camera", category: "Tab Settings"},
                defaultPage: {
                    title: "Default Page",
                    type: "defaultpage",
                    value: "",
                    feature: "automagic-navigation",
                    category: "Tab Settings"
                },
                pages: {
                    title: "Pages",
                    type: "pages",
                    value: "",
                    feature: "!automagic-navigation",
                    category: "Tab Settings"
                },
                move: {
                    title: "Move Tab", type: "move", left: function (e) {
                        0 != e.getIndex() && e.moveTo(e.getParent(), e.getIndex() - 1)
                    }, right: function (e) {
                        e.moveTo(e.getParent(), e.getIndex() + 1)
                    }, category: "Tab Settings"
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                onRemove: function () {
                    window.Designer.AppGraph._save()
                },
                onInsert: function () {
                    window.Designer.AppGraph._save()
                },
                hasCustomRenderInsert: true,
                canRedrawSingle: false,
                disableDragging: true,
                validChildren: [""],
                addDefaultChildren: function () {
                    if (window.Designer.featureCheck("!automagic-navigation")) {
                        var e = window.Designer.addPage();
                        e.set("url", "/" + e.getId()), e.set("parentState", this.getParentPage().id), e.set("parentView", this.getId()), e.set("title", this.get("title") + " Default Page"), this.set("pages", {pages: [{id: e.getId()}]})
                    } else {
                        var e = window.Designer.addPage();
                        e.set("url", "/" + e.getId()), e.set("title", this.get("title") + " Default Page"), this.set("defaultPage", e.getId()), "Camera Tab" == this.get("title") && window.Designer.setExtra("startingPage", e.getId())
                    }
                    return e
                },
                replaceRendered: function (e, t) {
                    var n = this.$rendered.parentNode;
                    if (n)for (var i = n.querySelectorAll("a"), o = n.querySelectorAll("ion-tab"), a = 0; a < o.length; a++)if (o[a].getAttribute("data-componentid") == this.getId())return i[a].setAttribute("data-componentid", this.getId()), void o[a].setAttribute("data-componentid", null)
                },
                dom: function (e, t) {
                    var i = "";
                    if (window.Designer.featureCheck("!automagic-navigation")) {
                        if (this.get("pages").pages && this.get("pages").pages.length > 0)try {
                            i = 'href="#' + window.Designer.getById(this.get("pages").pages[0].id).getFullPageUrl() + '"'
                        } catch (o) {
                        }
                    } else if (window.compiling && window.page_views) {
                        var a = this.get("defaultPage", ""), r = window.Designer.getById(a);
                        "undefined" != typeof r && 0 == r.get("disableParenting", false) && (i = 'href="#' + this.getParentPage().get("url"), window.page_views[a].length > 1 && (i = i + "/" + this.id), i = i + r.get("url") + '"')
                    }
                    var l = e.element('<ion-tab title="' + (this.get("title") || "") + '" icon="' + this.get("icon") + '" ' + i + '><ion-nav-view name="' + this.getId() + '"></ion-nav-view></ion-tab>'), s = n.DomHelper.Styler(this), d = s.getID();
                    l[0].setAttribute("id", d), "" !== this.getParent().get("fontcolor") && l[0].setAttribute("style", "color:" + this.getParent().get("fontcolor") + " !important;");
                    var c = this.get("class", "").split(" ");
                    for (var p in c)s.addClass(c[p]);
                    return s.stylize(l[0]), l[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("tabs", {
            type: "tabs",
            name: "Tabs",
            weight: 0,
            list: false,
            properties: {
                hasContent: {
                    type: "boolean",
                    title: "Has Content",
                    value: false,
                    placeholder: "Page title",
                    weight: 1,
                    category: "Style",
                    list: false
                },
                style: {
                    title: "Theme",
                    type: "theme-color",
                    help: "To customize these colors, open theming options by clicking on the paintbrush in the top right of your screen.",
                    value: "stable",
                    category: "Style"
                },
                fontcolor: {title: "Color", type: "color-picker", value: "", category: "Style", list: false},
                type: {
                    title: "Type",
                    type: "list2",
                    value: "tabs-icon-top",
                    options: [{id: "tabs-icon-top", text: "Icon Top"}, {
                        id: "tabs-icon-only",
                        text: "Icon Only"
                    }, {id: "tabs-icon-left", text: "Icon Left (with text)"}],
                    category: "Style"
                },
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                addTab: {
                    title: "Add New Tab", type: "button", "class": "btn-success", exec: function (e) {
                        var t = e.create("tab");
                        e.appendChild(t, false), t.set("title", "Tab " + e.getChildren().length);
                        var n = t.addDefaultChildren();
                        e.setCurrentTab(t), window.Designer.AppGraph._save(), e.$rootScope.$emit("document.modified"), window.Designer.select(n)
                    }, category: "Controls"
                },
                newProps: {list: false, type: "boolean", value: true}
            },
            obj: {
                isContainer: true,
                canDuplicate: false,
                disableDragging: true,
                postCompile: true,
                canRedrawSingle: false,
                validChildren: ["tab"],
                canDelete: false,
                info: "Only one tabs strip per app is allowed, you cannot delete or duplicate the tabs strip.",
                setCurrentTab: function (e) {
                },
                replaceRendered: function (e, t) {
                    this.$rendered.setAttribute("data-componentid", null), this.$rendered.querySelectorAll(".tabs")[0].setAttribute("data-componentid", this.getId())
                },
                onRender: function (e, t, n) {
                },
                dom: function (e, t, i) {
                    -1 !== this.get("style").indexOf("tabs-") && this.set("style", this.get("style").replace("tabs-", ""));
                    var o = ["tabs-" + this.get("style"), this.get("type")].join(" "), a = e.element('<ion-tabs class="' + o + '"></ion-tabs>'), r = n.DomHelper.Styler(this), l = r.getID();
                    a[0].setAttribute("id", l);
                    var s = this.get("class", "").split(" ");
                    for (var d in s)r.addClass(s[d]);
                    return r.stylize(a[0]), a[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("textarea", "TextareaComponent", {
            type: "forms",
            name: "Textarea",
            iconUrl: "/img/component-text-area.png",
            weight: 2
        })
    }]).factory("TextareaComponent", ["Component", function (t) {
        return function () {
            var i = Object.create(new t("textarea", {
                title: {
                    title: "Title",
                    type: "string",
                    value: "Text",
                    category: "Text"
                },
                name: {title: "Name", type: "string", value: "", category: "Text"},
                placeholder: {title: "Placeholder", type: "string", value: "", category: "Text"},
                value: {title: "Value", type: "string", value: "", category: "Text"},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            }, {
                validChildren: [], forceOneParent: ["list", "form"], recommendedParent: "form", dom: function (t, i) {
                    var o = t.element('<label class="item item-input"><span class="input-label">' + this.get("title") + '</span><textarea placeholder="' + e(this.get("placeholder")) + '">' + this.get("value", "") + "</textarea></label>"), a = n.DomHelper.Styler(this), r = a.getID();
                    o[0].setAttribute("id", r), this.get("name") && o.attr("name", this.get("name"));
                    var l = this.get("class", "").split(" ");
                    for (var s in l)a.addClass(l[s]);
                    return a.stylize(o[0]), o[0]
                }
            }));
            return i
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("toggle", "ToggleInputComponent", {
            type: "forms",
            name: "Toggle",
            iconUrl: "/img/component-toggle.png",
            weight: 2
        })
    }]).factory("ToggleInputComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("toggle", {
                title: {
                    title: "Title",
                    type: "string",
                    value: "Toggle",
                    category: "Text"
                },
                name: {title: "Name", type: "string", value: "", category: "Text"},
                style: {
                    title: "Style",
                    type: "theme-color",
                    help: "To customize these colors, open theming options by clicking on the paintbrush in the top right of your screen.",
                    value: "positive",
                    category: "Style"
                },
                on: {title: "Checked", type: "boolean", value: "false", category: "Style"},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            }, {
                validChildren: [],
                needsCompile: true,
                canRedrawSingle: false,
                forceOneParent: ["list", "form"],
                recommendedParent: "form",
                dom: function (e, t) {
                    if (this.get("style").indexOf("toggle-") > -1 && this.set("style", this.get("style").replace("toggle-", "")), 1 == this.get("on"))var i = 'ng-checked="true"'; else var i = "";
                    var o = e.element('<ion-toggle toggle-class="toggle-' + this.get("style") + '" ' + i + ">" + this.get("title") + "</ion-toggle>"), a = n.DomHelper.Styler(this), r = a.getID();
                    o[0].setAttribute("id", r), this.get("name") && o.attr("name", this.get("name"));
                    var l = this.get("class", "").split(" ");
                    for (var s in l)a.addClass(l[s]);
                    return a.stylize(o[0]), o[0]
                }
            }));
            return t
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("video", {
            type: "content",
            name: "Video",
            iconUrl: "/img/component-video.png",
            weight: 0,
            properties: {
                service: {
                    title: "Service",
                    type: "list",
                    value: "",
                    options: [{value: "", text: "Choose a Service"}, {
                        value: "youtube",
                        text: "YouTube"
                    }, {value: "vimeo", text: "Vimeo"}],
                    emptyText: "Choose a Service",
                    category: "Video"
                },
                videoid: {title: "Video ID", type: "string", value: "lTLTs2ZA2JQ", category: "Video"},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                validChildren: [], dom: function (e, t) {
                    var i = false, o = this.get("service", ""), a = this.get("videoid", "");
                    "" == o ? i = true : "" == a && (i = true);
                    var r = function (t) {
                        "undefined" == typeof t && (t = "lTLTs2ZA2JQ");
                        var n = '<div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;"><iframe src="https://www.youtube.com/embed/' + t + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>';
                        return window.compiling || (n += '<div style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>'), n += "</div>", e.element(n)[0]
                    }, l = function (t) {
                        var n = '<div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;"><iframe src="https://player.vimeo.com/video/' + t + '?rel=0&amp;showinfo=0?color=ffffff&title=0&byline=0&portrait=0&badge=0" frameborder="0" allowfullscreen width="500" height="281" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>';
                        return window.compiling || (n += '<div style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>'), n += "</div>", e.element(n)[0]
                    };
                    if (i)var s = r(); else switch (o) {
                        case"youtube":
                            var s = r(a);
                            break;
                        case"vimeo":
                            var s = l(a)
                    }
                    var d = n.DomHelper.Styler(this), c = d.getID();
                    s.setAttribute("id", c);
                    var p = this.get("class", "").split(" ");
                    for (var u in p)d.addClass(p[u]);
                    return d.stylize(s), s
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("card", {
            type: "content",
            name: "Card",
            iconUrl: "/img/component-card.png",
            weight: 0,
            list: false,
            properties: {
                title: {title: "Title", type: "string", value: "Card", category: "Text"},
                footer: {title: "Footer", type: "string", value: "", category: "Text"},
                "class": {
                    title: "Classes",
                    type: "class",
                    value: "",
                    category: "Style",
                    fullwidth: true,
                    help: 'White space delimited classes to be added to this component. (ex. "myclass1 myclass2")',
                    weight: 10
                },
                newProps: {list: false, type: "boolean", value: true},
                skipcss: {type: "boolean", list: false, value: true}
            },
            obj: {
                name: "Card", getRenderedChildren: function () {
                    if (!this.$rendered)return [];
                    var e = this.$rendered.querySelector(".item-body");
                    return e && e.children || []
                }, getRenderTarget: function (e) {
                    return e.querySelector(".item-body")
                }, getRenderedTarget: function () {
                    return this.$rendered.querySelector(".item-body")
                }, dom: function (e, t) {
                    var i = n.DomHelper.Styler(this), o = i.getID(), a = e.element('<div class="list card"><div class="item item-body"></div></div>');
                    a[0].setAttribute("id", o);
                    var r = this.get("title"), l = this.get("footer");
                    r && a.prepend('<div class="item item-divider"> ' + r + "</div>"), l && a.append('<div class="item item-divider"> ' + l + "</div>");
                    var s = this.get("class", "").split(" ");
                    for (var d in s)i.addClass(s[d]);
                    return i.stylize(a[0]), a[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("content", {
            type: "content",
            name: "Content",
            weight: 0,
            list: false,
            properties: {
                ionicpadding: {title: "Padding", type: "boolean", value: true, weight: 1},
                scroll: {title: "Scrolling", type: "boolean", value: true, weight: 1},
                hasHeader: {title: "Header Margin", type: "boolean", value: true, weight: 2},
                hasFooter: {title: "Footer Margin", type: "boolean", value: false, weight: 3}
            },
            obj: {
                canDuplicate: false,
                canDelete: false,
                disableDragging: true,
                redrawForChildren: true,
                getRenderedChildren: function () {
                    return this.$rendered ? this.get("scroll") === true ? this.$rendered.children[0].children : this.$rendered.children : []
                },
                dom: function (e, t) {
                    var n = e.element('<ion-content padding="' + this.get("ionicpadding") + '"></ion-content>');
                    this.get("scroll", true) === false && n.attr("scroll", "false");
                    var i = this.get("hasHeader", false), o = this.get("hasFooter", false);
                    return i && n.addClass("has-header"), o && n.addClass("has-footer"), n[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("header-bar", {
            type: "header-bar",
            name: "Header Bar",
            iconUrl: "/img/component-header.png",
            weight: 0,
            list: false,
            properties: {
                barStyle: {
                    title: "Bar Style",
                    type: "button-styles",
                    value: "bar-stable",
                    options: [{value: "", text: "Default", color: "#fff"}, {
                        value: "bar-light",
                        text: "Light",
                        color: "#fff"
                    }, {value: "bar-stable", text: "Stable", color: "#f8f8f8"}, {
                        value: "bar-dark",
                        text: "Dark",
                        color: "#444"
                    }, {value: "bar-positive", text: "Positive", color: "#4a87ee"}, {
                        value: "bar-balanced",
                        text: "Balanced",
                        color: "#66cc33"
                    }, {value: "bar-assertive", text: "Assertive", color: "#ef4e3a"}, {
                        value: "bar-calm",
                        text: "Calm",
                        color: "#43cee6"
                    }, {value: "bar-energized", text: "Energized", color: "#f0b840"}, {
                        value: "bar-royal",
                        text: "Royal",
                        color: "#8a6de9"
                    }]
                }
            },
            obj: {
                canDelete: false, addDefaultChildren: function () {
                    var e = ComponentFactory.create("heading");
                    e.set("size", {value: "1"}), e.set("extraClasses", {value: "title"}), this.appendChild(e)
                }, dom: function (e, t) {
                    var n = this.get("barStyle") || "bar-stable", i = e.element('<ion-header-bar class="' + n + '"></ion-header-bar>');
                    return i[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("header-buttons", "HeaderButtonsComponent", {
            type: "header",
            name: "Header Buttons",
            list: false,
            weight: 0
        })
    }]).factory("HeaderButtonsComponent", ["Component", "ComponentFactory", function (e, t) {
        return function () {
            var n = Object.create(new e("header-buttons", {}, {
                addDefaultChildren: function () {
                    var e = t.create("button");
                    e.setFromMap({text: "Button", type: "button-clear"}), this.appendChild(e)
                }, dom: function (e, t) {
                    var n = e.element('<div class="buttons"></div>');
                    return n[0]
                }
            }));
            return n
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("modal", "ModalComponent", {type: "modal", name: "Modal", weight: 0, list: false})
    }]).factory("ModalComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("modal", {}, {
                isContainer: true,
                canDuplicate: false,
                isPage: true,
                dom: function (e, t) {
                    var n = e.element('<div class="modal"></div>');
                    return n[0]
                }
            }));
            return t
        }
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("side-menu-content", {
            type: "side-menu-content",
            name: "Side Menu Content",
            weight: 0,
            list: false,
            properties: {},
            obj: {
                isContainer: true, canDuplicate: false, canDelete: false, disableDragging: true, getRenderTarget: function (e) {
                    return e.querySelector("ion-nav-view")
                }, addDefaultChildren: function () {
                }, dom: function (e, t) {
                    var n = e.element('<ion-side-menu-content><ion-nav-bar class="bar-stable"><ion-nav-back-button></ion-nav-back-button><ion-nav-buttons side="left"><button class="button button-icon button-clear ion-navicon" menu-toggle="left"></button></ion-nav-buttons></ion-nav-bar><ion-nav-view name="menuContent"></ion-nav-view></ion-side-menu-content>')[0];
                    return n
                }
            }
        }), e.add("side-menu-menu", {
            type: "side-menu-menu",
            name: "Side Menu Menu",
            weight: 0,
            list: false,
            properties: {},
            obj: {
                isContainer: true,
                canDuplicate: false,
                canDelete: false,
                disableDragging: true,
                addDefaultChildren: function () {
                    var e = ComponentFactory.create("list"), t = this.create("list-item");
                    t.set("content", {value: "Item 1"}), e.appendChild(t, true), t = this.create("list-item"), t.set("content", {value: "Item 2"}), e.appendChild(t, true), t = this.create("list-item"), t.set("content", {value: "Item 3"}), e.appendChild(t, true), this.appendChild(e, true)
                },
                dom: function (e, t) {
                    var n = e.element('<ion-side-menu side="left">\n</ion-side-menu>');
                    return n[0]
                }
            }
        }), e.add("side-menu", {
            type: "page",
            name: "Side Menu",
            weight: 0,
            list: false,
            obj: {
                isContainer: true,
                isPage: true,
                canDuplicate: false,
                disableDragging: true,
                validChildren: [],
                addDefaultChildren: function () {
                    ComponentFactory.create("side-menu-content");
                    this.appendChild(b)
                },
                dom: function (e, t) {
                    var n = e.element('<ion-side-menus enable-menu-with-back-views="false">\n</ion-side-menus>');
                    return n[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.add("slide-box", {
            type: "forms",
            name: "Slide Box",
            iconUrl: "/img/component-slide-box.png",
            weight: 0,
            list: false,
            properties: {},
            obj: {
                validChildren: [],
                needsCompile: true,
                validChildren: ["slide"],
                disableDragging: true,
                addDefaultChildren: function () {
                    var e = this.create("slide");
                    this.appendChild(e, true);
                    var e = this.create("slide");
                    this.appendChild(e, true);
                    var e = this.create("slide");
                    this.appendChild(e, true)
                },
                dom: function (e, t) {
                    var n = e.element('<ion-slide-box style="height: 100%"></ion-slide-box>');
                    return n[0]
                }
            }
        }), e.add("slide", {
            type: "forms",
            name: "Slide",
            iconUrl: "/img/component-slide.png",
            weight: 0,
            list: false,
            properties: {},
            obj: {
                validChildren: [], needsCompile: true, disableDragging: true, addDefaultChildren: function () {
                    var e = this.create("image");
                    e.set("src", "http://placekitten.com/320/568"), this.appendChild(e, true)
                }, dom: function (e, t) {
                    var n = e.element("<ion-slide></ion-slide>");
                    return n[0]
                }
            }
        })
    }]), n.config(["ComponentTypesProvider", function (e) {
        e.addType("list-item-thumbnail", "ListItemThumbnailComponent", {
            type: "list-item",
            name: "Thumbnail List Item",
            weight: 1,
            iconUrl: "/img/component-list-thumbnail.png",
            list: false
        })
    }]).factory("ListItemThumbnailComponent", ["Component", function (e) {
        return function () {
            var t = Object.create(new e("list-item-thumbnail", {
                image: {
                    title: "",
                    type: "urlupload",
                    value: "",
                    placeholder: "Image URL",
                    uploadText: "Choose Image...",
                    fullwidth: true,
                    category: "Image",
                    autoheight: true
                },
                style: {title: "Style", type: "string", value: "", list: false},
                title: {title: "Title", type: "string", value: "Title", category: "Text"},
                content: {title: "Content", type: "string", value: "Item", category: "Text"},
                wordWrap: {title: "Word Wrap", type: "boolean", value: false, category: "Text"},
                link: {title: "Type", type: "route", value: "", fullwidth: true, category: "Link"},
                linkView: {type: "string", value: "", list: false},
                newProps: {list: false, type: "boolean", value: true}
            }, {
                toString: function () {
                    return "ListItemComponent"
                },
                needsCompile: true,
                forceOneParent: ["list", "form"],
                recommendedParent: "list",
                validChildren: [],
                onRemove: function () {
                    window.Designer.AppGraph.removeLink(this)
                },
                onInsert: function () {
                    window.Designer.AppGraph.addLink(this)
                },
                dom: function (e, t) {
                    var i = t.createElement("img"), o = e.element('<ion-item class="item-thumbnail-left"></ion-item>');
                    this.get("link", "") && (link = this.get("link"), n.DomHelper.href(o[0], link, this));
                    var a = this.get("image");
                    if (window.multiFlag) {
                        if (a) {
                            var r = a.split("/");
                            r = r[r.length - 1], i.src = "img/" + r, window.downloads.push({
                                type: "img",
                                url: a,
                                name: r
                            })
                        }
                    } else a || (a = "/img/thumbnail-img.png"), i.src = a;
                    o.append(i);
                    var l = "";
                    return this.get("wordWrap", false) && (l = ' style="white-space:normal;"'), o.append("<h2>" + this.get("title") + "</h2>"), o.append("<p" + l + ">" + this.get("content") + "</p>"), o[0]
                }
            }));
            return t
        }
    }]), n.provider("Action", [function () {
        var e = {}, t = [], n = [];
        return {
            $get: ["$rootScope", function (i) {
                return {
                    register: function (t, n) {
                        n.action = t, e[t] = n
                    }, exec: function (e) {
                        this._push(e), this.script(e, true)
                    }, pushAction: function (e) {
                        console.log("ACTION", e.action), this._push(e), this.script(e, true)
                    }, script: function (t, n) {
                        var o = e[t.action];
                        o ? n ? o.perform(t) : o.revert(t) : console.error("ACTION: No action for action", t.action), i.$emit("document.modified")
                    }, reset: function () {
                        t = [], n = []
                    }, undo: function () {
                        var e = t.pop();
                        e && (this.script(e), n.push(e))
                    }, redo: function () {
                        var e = n.pop();
                        e && (this.script(e, true), t.push(e))
                    }, _push: function (e) {
                        n = [], t.push(e)
                    }, canUndo: function () {
                        return t.length > 0
                    }, canRedo: function () {
                        return n.length > 0
                    }, _print: function () {
                        console.log("UNDO STACK");
                        for (var e = 0; e < t.length; e++)console.log(t[e].action)
                    }
                }
            }]
        }
    }]), angular.module("ionic.creator.components", []).provider("ComponentTypes", ["$provide", function (e) {
        var t = {};
        return window.componentTypes = t, {
            addType: function (e, n, i) {
                t[e] = {className: n, type: e, data: i || {}}
            }, add: function (n, i) {
                t[n] = {
                    className: n + "Component",
                    type: n,
                    data: i || {}
                }, e.factory(n + "Component", ["Component", function (e) {
                    return function () {
                        return Object.create(new e(n, i.properties, i.obj))
                    }
                }])
            }, $get: ["$injector", function (e) {
                return {
                    get: function (e) {
                        return t[e]
                    }, getSortedInstances: function () {
                        var e, n = {};
                        for (var i in t)t[i].data.list !== false && (n[t[i].data.type] || (n[t[i].data.type] = []), n[t[i].data.type].push(t[i]));
                        for (var i in n)e = n[i], e.sort(function (e, t) {
                            return e.weight || (e.weight = 0), t.weight || (t.weight = 0), e.weight - t.weight
                        });
                        return n
                    }
                }
            }]
        }
    }]).factory("ComponentTemplate", ["$http", "$q", function (e, t) {
        return {
            getFromTemplate: function (e) {
                return this.getFromTemplateUrl("/tmpl/page-templates/" + e + ".json")
            }, getFromTemplateUrl: function (n) {
                var i = t.defer();
                return e.get(n, {params: {t: (new Date).getTime()}}).then(function (e) {
                    i.resolve(e.data)
                }, function (e) {
                    i.reject(e)
                }), i.promise
            }
        }
    }]).factory("ComponentFactory", ["ComponentTypes", "ComponentTemplate", "$rootScope", "$injector", "$q", function (e, t, n, i, o) {
        var a = {};
        return {
            create: function (t, o) {
                var a = e.get(t), r = i.get(a.className), l = new r;
                if (l.componentType = t, l.$rootScope = n, a.data.overwriteValues)for (var s in a.data.overwriteValues) {
                    var d = a.data.overwriteValues[s];
                    l.set(s, d)
                }
                return l
            }, clearIdMap: function () {
                a = {}
            }, cleanUp: function (e) {
                a[c.type] ? a[c.type]-- : a[c.type] = 0
            }, clone: function (e) {
                var t = this.create(e.type), n = e.getProperties();
                for (var i in n)"url" == i ? t.set(i, "RESETMEPLEASE") : "parentState" == i || "parentView" == i ? t.set(i, "") : t.set(i, n[i]);
                t.id = null;
                for (var o = 0; o < e.children.length; o++)t.appendChild(this.clone(e.children[o]));
                return t
            }, newId: function (e) {
                function t() {
                    a[e]++;
                    var n = e + a[e];
                    return "undefined" == typeof window.Designer.getById(n) ? n : t()
                }

                return e in a ? t() : (a[e] = 0, t())
            }, markId: function (e) {
                if (e) {
                    var t = e.match(/([^\d]+)/)[0], n = e.match(/(\d+)/)[0], i = a[t];
                    i && n > i ? a[t] = n : i || (a[t] = n)
                }
            }, _setProperties: function (e, t) {
                if (t)for (var n in t)e.set(n, {value: t[n]})
            }, buildFromTemplate: function (e, i) {
                var o = this;
                t.getFromTemplate(i).then(function (t) {
                    var n = o.build(t, true);
                    o._setProperties(n, t.props), e.replaceWith(n)
                }, function (e) {
                    console.error("Error building component from template", e), n.$emit("componentFactory.error", e)
                })
            }, createFromTemplate: function (e) {
                var i = o.defer(), a = this;
                return t.getFromTemplateUrl(e).then(function (e) {
                    var t = false, n = false;
                    e.addDefault && (t = true), e.pageDefault && (n = true);
                    var o = a.build(e, t, n, e.props);
                    i.resolve(o)
                }, function (e) {
                    console.error("Error building component from template", e), i.reject(e), n.$emit("componentFactory.error", e)
                }), i.promise
            }, build: function (e, t, i, o) {
                var a, r, l, s, d, c, p, u, g = [], u = this.create(e.type);
                for ("app" === e.type ? u.id = "app1" : (u.id = this.newId(e.type), u.afterId && u.afterId(), n.$emit("component.registerChild", u)), "undefined" != typeof o && this._setProperties(u, o), i && u.addDefaultChildren(), g.push([e, u]); g.length;)if (a = g.shift(), r = a[0], l = a[1], r.children)for (c = 0, p = r.children.length; p > c; c++) {
                    s = r.children[c];
                    try {
                        d = this.create(s.type)
                    } catch (h) {
                        console.error("No such component of type", s.type), n.$emit("document.loadError", h);
                        break
                    }
                    s.fromTemplate ? this.buildFromTemplate(d, s.fromTemplate) : (this._setProperties(d, s.props), s.id && (d.id = s.id)), l.appendChild(d), t && d.addDefaultChildren(), g.splice(0, 0, [s, d])
                }
                return u
            }
        }
    }]), n.factory("Document", ["ComponentFactory", "$http", "$injector", "$rootScope", "$q", function (e, t, n, i, o) {
        return function (n) {
            var n = n, a = e.create("app");
            a.id = e.newId(a.type);
            var r = a, l = {};
            return {
                name: "Untitled project", getDocumentId: function () {
                    return n
                }, getRoot: function () {
                    return a
                }, getPageContainer: function () {
                    return r
                }, getProperty: function (e) {
                    return l[e]
                }, createComponent: function (t, n, i, o) {
                    var a = e.create(t, i);
                    return n && (a.isPlaceholder = o, a.addDefaultChildren(i)), a
                }, addPage: function (e) {
                    var t = this.createComponent("page");
                    return e || (e = "Page " + (r.getChildren().length + 1)), t.set("title", {value: e}), t.set("url", {value: t.getId()}), r.appendChild(t), i.$emit("document.pageAdded", t), t
                }, removePage: function (e) {
                    return r.removeChild(e)
                }, getPages: function () {
                    return r.getChildren()
                }, getPage: function (e) {
                    return r.getChildren()[e]
                }, getNumPages: function () {
                    return r.getChildren().length
                }, fromJson: function (e) {
                    try {
                        var t = JSON.parse(e);
                        this._buildFrom(t)
                    } catch (n) {
                        i.$emit("document.parseError", n), console.error("Unable to load:", n)
                    }
                }, extraFromJson: function (e) {
                    var t = JSON.parse(e);
                    return "undefined" == typeof t.extra ? {} : t.extra
                }, fromUrl: function (e) {
                    var n = this, a = o.defer();
                    return t.get(e, {t: +new Date}).then(function (e) {
                        n._buildFrom(e.data), a.resolve(n)
                    }, function (e) {
                        i.$emit("document.loadError", e), a.reject(e)
                    }), a.promise
                }, _getPageContainer: function () {
                    return r = "nav" == a.getChild(0).type ? a.getChild(0) : a
                }, _buildFrom: function (t) {
                    var n;
                    for (var i in t)"document" !== i && (l[i] = t[i]);
                    var n = e.build(t.document.root);
                    a = n, this._getPageContainer()
                }
            }
        }
    }]), n.run(["$templateCache", "$rootScope", function (e, t) {
        function n(e) {
            for (var t = e.get("idName"), n = e; n && "" !== n.get("parentState");) {
                var i = n.get("parentState");
                n = window.Designer.getById(i), n && (t = n.get("idName") + "." + t)
            }
            return t
        }

        function i(e) {
            var t = "  .state('" + e.get("idName") + "', {\n    url: '" + e.get("url") + "',\n    templateUrl: 'templates/" + e.get("idName") + ".html',\n";
            return e.get("abstract", false) ? t += "    abstract:true\n" : t = t + "    controller: '" + e.get("idName") + "Ctrl'\n", t += "  })\n\n"
        }

        function o(e, t) {
            var n = "  .state('" + e.get("idName") + "." + t.get("idName") + "', {\n    url: '" + t.get("url") + "',\n    views: {\n      'side-menu21': {\n        templateUrl: 'templates/" + t.get("idName") + ".html',\n        controller: '" + t.get("idName") + "Ctrl'\n      }\n    }\n  })\n\n";
            return n
        }

        function a(e, t, n) {
            var i = "";
            if (t.length > 1) {
                i = i + "  /* \n    The IonicUIRouter.js UI-Router Modification is being used for this route.\n    To navigate to this route, do NOT use a URL. Instead use one of the following:\n      1) Using the ui-sref HTML attribute:\n        ui-sref='" + e.get("idName") + "." + n.get("idName") + "'\n      2) Using $state.go programatically:\n        $state.go('" + e.get("idName") + "." + n.get("idName") + "');\n    This allows your app to figure out which Tab to open this page in on the fly.\n    If you're setting a Tabs default page or modifying the .otherwise for your app and\n    must use a URL, use one of the following:\n";
                for (var o = 0; o < t.length; o++)i = i + "      " + e.get("url") + "/" + t[o] + n.get("url") + "\n";
                i += "  */\n"
            }
            i = i + "  .state('" + e.get("idName") + "." + n.get("idName") + "', {\n    url: '" + n.get("url") + "',\n    views: {\n";
            for (var o = 0; o < t.length; o++)i = i + "      '" + t[o] + "': {\n        templateUrl: 'templates/" + n.get("idName") + ".html',\n        controller: '" + n.get("idName") + "Ctrl'\n      }", o < t.length - 1 && (i += ","), i += "\n";
            var i = i + "    }\n  })\n\n";
            return i
        }

        function r(e, t) {
            var n = [];
            "undefined" == typeof t && (t = []), t.push(e);
            var i = window.Designer.AppGraph._load(), o = i.entries[e];
            if ("undefined" == typeof o)return [];
            for (var a in o.to) {
                var l = o.to[a];
                n.push(l.to), -1 == t.indexOf(l.to) && (n = n.concat(r(l.to, t)))
            }
            return n
        }

        Handlebars.registerHelper("pageUrl", function (e) {
            return e.get("url")
        }), Handlebars.registerHelper("fullPageUrl", function (e) {
            return e.getFullPageUrl()
        }), Handlebars.registerHelper("defaultPage", function (e) {
            var t = window.Designer.getExtra("startingPage", "");
            return "" !== t && (checkPage = window.Designer.getById(t), "undefined" != typeof checkPage && (e = checkPage)), e.getFullPageUrl()
        }), Handlebars.registerHelper("activePageUrl", function (e) {
            if (1 != e.get("abstract"))return e.getFullPageUrl();
            var t = e.get("pages", {pages: []});
            if (t) {
                if (0 == t.pages.length && (t = e.children[0].children[0].get("pages")), t)return window.Designer.getById(t.pages[0].id).getFullPageUrl()
            } else console.error("No pages for abstract", e)
        }), Handlebars.registerHelper("stateName", function (e) {
            return n(e)
        }), Handlebars.registerHelper("myId", function (e) {
            return e.get("idName")
        }), Handlebars.registerHelper("parentId", function (e) {
            return e.get("parentState")
        }), Handlebars.registerHelper("parentView", function (e) {
            return e.get("parentView")
        }), Handlebars.registerHelper("isAbstract", function (e) {
            return this.get("abstract") ? e.fn(this) : e.inverse(this)
        }), Handlebars.registerHelper("isChildState", function (e) {
            return "" !== this.get("parentState") ? e.fn(this) : e.inverse(this)
        }), Handlebars.registerHelper("isAutoMagical", function (e) {
            return window.Designer.featureCheck("automagic-navigation") ? e.fn(this) : e.inverse(this)
        }), Handlebars.registerHelper("generateRoutes", function (e, t) {
            if (window.ionicuirouter_required = false, window.Designer.featureCheck("automagic-navigation")) {
                var n = window.Designer.getExtra("last_route_generation", 0), l = window.Designer.AppGraph.getLastUpdated();
                if (n == l)return window.page_views = window.Designer.getExtra("page_views"), window.ionicuirouter_required = window.Designer.getExtra("ionicuirouter_required"), new Handlebars.SafeString(window.Designer.getExtra("routes"));
                var s = "";
                switch (window.Designer.getExtra("appType")) {
                    case"blank":
                        for (var d = 0; d < e.length; d++) {
                            var c = e[d];
                            s += i(c)
                        }
                        var t = window.Designer.getExtra("startingPage", "");
                        ("undefined" == typeof window.Designer.getById(t) || null === window.Designer.getById(t).parent) && (t = ""), t = "" == t ? e[0] : window.Designer.getById(t), s = s + "$urlRouterProvider.otherwise('" + t.get("url") + "')";
                        break;
                    case"sidemenu":
                        var p = window.Designer.getById("side-menu21"), u = [], g = p.get("defaultPage", "");
                        if ("" !== g) {
                            var h = window.Designer.getById(g);
                            "undefined" != typeof h && null !== h.parent && 0 == h.get("disableParenting", false) ? (u.push(g), u = u.concat(r(g))) : p.set("defaultPage", "")
                        }
                        u = u.concat(r("side-menu21"));
                        var m = false;
                        p.set("previewPage", "");
                        for (var d = 0; d < e.length; d++) {
                            var c = e[d];
                            u.indexOf(c.id) > -1 && 0 == c.get("disableParenting", false) ? (c.set("parentState", p.id), m || (p.set("previewPage", c.id), m = true), s += o(p, c)) : (c.set("parentState", ""), s += i(c))
                        }
                        var t = window.Designer.getExtra("startingPage", "");
                        if (("undefined" == typeof window.Designer.getById(t) || null === window.Designer.getById(t).parent) && (t = ""), t = "" == t ? e[0] : window.Designer.getById(t), "side-menu21" == t.id && (t = window.Designer.getById(u[0])), t)var f = t.get("url"); else {
                            var f = "";
                            console.error("We are unable to choose a default page for your app")
                        }
                        "" !== f && u.indexOf(t.id) > -1 && 0 == t.get("disableParenting", false) && (f = p.get("url") + f), s = s + "$urlRouterProvider.otherwise('" + f + "')";
                        break;
                    case"tabs":
                    case"sidemenutabs":
                        for (var v = window.Designer.getById("page1"), y = window.Designer.getById("side-menu21"), w = v.children[0].children, b = {}, d = 0; d < w.length; d++) {
                            var C = w[d], $ = C.get("defaultPage", ""), g = window.Designer.getById($), S = [];
                            if ("undefined" != typeof g && null !== g.parent) {
                                if (0 == g.get("disableParenting", false)) {
                                    S.push(r($)), S[S.length - 1].push($);
                                    for (var P = 0; P < S[S.length - 1].length; P++) {
                                        var x = S[S.length - 1][P];
                                        "undefined" == typeof b[x] && (b[x] = []), -1 == b[x].indexOf(C.id) && b[x].push(C.id)
                                    }
                                }
                            } else C.set("defaultPage", "")
                        }
                        window.page_views = b;
                        var m = false;
                        v.set("previewPage", "");
                        for (var d = 0; d < e.length; d++) {
                            var c = e[d];
                            "undefined" == typeof b[c.id] || 1 == c.get("disableParenting", false) ? ("sidemenutabs" != window.Designer.getExtra("appType") || "side-menu21" != c.id) && (c.set("parentState", ""), c.set("routeViews", ""), s += i(c)) : (c.set("parentState", v.id), c.set("routeViews", b[c.id]), m || (v.set("previewPage", c.id), y && y.set("previewPage", c.id), m = true), s += a(v, b[c.id], c), b[c.id].length > 1 && (window.ionicuirouter_required = true))
                        }
                        var t = window.Designer.getExtra("startingPage", "");
                        if (("undefined" == typeof window.Designer.getById(t) || null === window.Designer.getById(t).parent) && (t = ""), t = "" == t ? e[0] : window.Designer.getById(t), "page1" == t.id || "side-menu21" == t.id)try {
                            t = window.Designer.getById(S[0][0])
                        } catch (T) {
                            t = null
                        }
                        if (t)var f = t.get("url"); else {
                            var f = "";
                            console.error("We are unable to choose a default page for your app")
                        }
                        if ("" !== f && "undefined" != typeof b[t.id] && 0 == t.get("disableParenting", false)) {
                            var D = "";
                            if (b[t.id].length > 1)for (var d = 0; d < b[t.id].length; d++)0 == d && (D = "/" + b[t.id][0]), window.Designer.getById(b[t.id][d]).get("defaultPage") == t.id && (D = "/" + b[t.id][d]);
                            f = v.get("url") + D + f
                        }
                        s = s + "$urlRouterProvider.otherwise('" + f + "')"
                }
                return window.Designer.setExtra("routes", s), window.Designer.setExtra("last_route_generation", l), window.Designer.setExtra("page_views", b), window.Designer.setExtra("ionicuirouter_required", ionicuirouter_required), new Handlebars.SafeString(s)
            }
        })
    }]).factory("DocumentExporter", ["$http", "$q", "$templateCache", "$compile", "$rootScope", "$injector", "DocumentRenderer", "DocumentIterator", "Features", "Themes", function (e, t, n, i, o, a, r, l, s, d) {
        var c = function (e, t) {
            var n = r.renderAsHtml(e);
            return t === true ? n : '<script id="templates/' + e.get("idName") + '.html" type="text/ng-template">\n' + n + "</script>"
        }, p = function (e, t, n) {
            var i = Handlebars.compile(t)({activePage: n, pages: e});
            return i
        }, u = function (e) {
            return e.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (e, t) {
                return 0 === +e ? "" : 0 == t ? e.toLowerCase() : e.toUpperCase()
            })
        }, g = function (e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                page = e[i];
                var o = u(page.get("title", ""));
                o = o.replace(/\W/g, ""), "" == o && (o = page.id), t.indexOf(o) > -1 ? (n[o]++, o = o + "" + n[o]) : (t.push(o), n[o] = 1), page.set("idName", o)
            }
        }, h = function (e, t, n, i, a, l, s, d) {
            o.multiFlag = true, o.downloads = [], window.multiFlag = o.multiFlag, window.downloads = o.downloads, window.compiling = true, g(t);
            for (var p, u, h = [], m = Handlebars.compile(a)({
                pages: t,
                ionicuirouter_required: window.ionicuirouter_required
            }), f = e.children[0], v = r.renderAsHtml(e, f), y = Handlebars.compile(n)({
                content: v,
                ionicuirouter_required: window.ionicuirouter_required,
                fonts: window.Designer.Themes.settings.fontList,
                includeCustomCSS: window.Designer.Themes.hasCustomStyles() && window.Designer.Themes.settings.validCompiledCSS
            }), w = 0; w < t.length; w++)p = t[w], ("sidemenutabs" != window.Designer.getExtra("appType") || "side-menu21" != p.id) && (u = c(p, true), h.push({
                id: p.getId(),
                name: p.get("idName"),
                html: u
            }));
            var b = Handlebars.compile(i)({}), C = Handlebars.compile(l)({pages: t}), $ = {
                pages: h,
                indexHtml: y,
                appJs: b,
                routeJs: m,
                controllerJs: C,
                downloads: o.downloads,
                servicesJs: s,
                directivesJs: d
            };
            return o.multiFlag = false, window.multiFlag = o.multiFlag, window.compiling = false, $
        }, m = function (e, t, n, i, o) {
            var a, l, t = t;
            g(t), window.compiling = true;
            for (var s = e.children[0], u = r.renderAsHtml(e, s), h = p(t, n, o), m = [u], f = 0; f < t.length; f++)a = t[f], ("sidemenutabs" != window.Designer.getExtra("appType") || "side-menu21" != a.id) && (l = c(a), m.push(l));
            var v = Handlebars.compile(i)({
                content: m.join("\n"),
                js: h,
                fonts: window.Designer.Themes.settings.fontList,
                includeCustomCSS: window.Designer.Themes.hasCustomStyles() && window.Designer.Themes.settings.validCompiledCSS,
                customCSSURL: d.getCSSURL(window.Designer.getProject().app_id, window.Designer.Themes.settings.version),
                androidUsingDefaultFont: "default" == window.Designer.Themes.settings.iosFont,
                iosUsingDefaultFont: "default" == window.Designer.Themes.settings.androidFont
            });
            return window.compiling = false, v
        }, f = function (e) {
            var t, n = {}, i = e.getProperties();
            for (var o in i)t = i[o], n[o] = t.value;
            return n
        };
        return {
            _toJson: function (e) {
                var t, n, i, o;
                for (o = {
                    type: e.type,
                    id: e.getId(),
                    props: f(e),
                    children: []
                }, t = 0, n = e.children.length; n > t; t++)i = e.children[t], o.children.push(this._toJson(i));
                return o
            }, toJson: function (e, t) {
                var n = e.getRoot();
                tree = this._toJson(n);
                var i = {v: e.getProperty("v"), generated: +new Date, extra: t, document: {root: tree}};
                return obj = JSON.stringify(i), obj
            }, jsonToSinglePageHtml: function (n, i) {
                var r = a.get("Document"), l = t.defer(), s = [e.get("/tmpl/export-templates/app.js"), e.get("/tmpl/export-templates/preview-index.html")];
                return t.all(s).then(function (e) {
                    var t = new r;
                    t.fromJson(n), l.resolve(m(t.getRoot(), t.getPages(), e[0].data, e[1].data))
                }, function (e) {
                    l.reject(e), o.$emit("document.exporter.error", e)
                }), l.promise
            }, toSinglePageHTML: function (n, i, a) {
                var r = t.defer();
                if (1 == a)var l = "/tmpl/export-templates/export-index.html"; else var l = "/tmpl/export-templates/preview-index.html";
                var s = [e.get("/tmpl/export-templates/app.js"), e.get(l)];
                return t.all(s).then(function (e) {
                    r.resolve(m(n.getRoot(), n.getPages(), e[0].data, e[1].data, i))
                }, function (e) {
                    r.reject(e), o.$emit("document.exporter.error", e)
                }), r.promise
            }, toMultiPageHTML: function (n) {
                var i = t.defer(), a = [e.get("/tmpl/export-templates/export-index.html"), e.get("/tmpl/export-templates/export-app.js"), e.get("/tmpl/export-templates/export-routes.js"), e.get("/tmpl/export-templates/export-controllers.js"), e.get("/tmpl/export-templates/export-services.js"), e.get("/tmpl/export-templates/export-directives.js")];
                return t.all(a).then(function (e) {
                    i.resolve(h(n.getRoot(), n.getPages(), e[0].data, e[1].data, e[2].data, e[3].data, e[4].data, e[5].data))
                }, function (e) {
                    i.reject(e), o.$emit("document.exporter.error", e)
                }), i.promise
            }
        }
    }]), n.factory("DocumentIterator", function () {
        var e = function (t, n, i) {
            var o, a;
            for (o = 0, a = t.children.length; a > o; o++)child = t.children[o], i(child, t, n + 1), e(child, n + 1, i)
        };
        return {
            traverse: function (t, n) {
                e(t, 0, n)
            }, each: function (e, t) {
                var n, o = [], a = 1, r = [];
                for (o.push(e.getRoot()); o.length;)if (item = o.shift(), item.children) {
                    for (i = 0, j = item.children.length; i < j; i++)n = item.children[i], r.push(t(n, item, a)), o.splice(0, 0, n);
                    a++
                }
                return r
            }
        }
    }), n.factory("DocumentRenderer", [function () {
        var e = {
            setFrameInjectables: function (e, t, n, i, o) {
                this.$frameCompile = e, this.$frameRootScope = t, this.$frameDocument = n, this.$frameAngular = i, this.$frameWindow = o
            }, getFrameAngular: function () {
                return this.$frameAngular
            }, getFrameCompile: function () {
                return this.$frameCompile
            }, getFrameDocument: function () {
                return this.$frameDocument
            }, getFrameWindow: function () {
                return this.$frameWindow
            }, annotateNode: function (e, t, n) {
                var i = t.get("extraClasses"), o = t.get("id"), a = t.get("width"), r = t.get("height"), l = t.get("margin"), s = t.get("padding"), d = t.get("skipcss", false);
                if (d)var c = {}; else var c = {
                    width: a,
                    height: r,
                    marginTop: l.top + "px",
                    marginRight: l.right + "px",
                    marginBottom: l.bottom + "px",
                    marginLeft: l.left + "px",
                    paddingTop: s.top + "px",
                    paddingRight: s.right + "px",
                    paddingBottom: s.bottom + "px",
                    paddingLeft: s.left + "px"
                };
                $(e).css(c), n || e.setAttribute("data-componentid", t.getId()), i && e.classList.add(i), o && (e.id = o)
            }, getScope: function (e) {
                var t, n, i = this.$frameRootScope.$new(), o = e.getProperties();
                for (t in o)n = o[t], i[n.scopeField || t] = n.value;
                return i
            }, renderChild: function (e) {
                if (this.$frameCompile && this.$frameRootScope) {
                    var t = e.get("extraClasses"), n = e.get("id");
                    return dom = e.dom(true, this.$frameAngular, this.$frameDocument), dom.setAttribute("data-componentid", e.getId()), t && dom.classList.add(t), n && (dom.id = n), e.needsCompile ? e.getFromCompiled(this.$frameCompile(dom)(this.$frameRootScope)) : dom
                }
            }, _compile: function (e, t) {
                var n, n = e.dom(this.$frameAngular, this.$frameDocument);
                return this.annotateNode(n, e), e.setRendered(n, this.$frameAngular.element), n
            }, _render: function (e, t, n) {
                var i, o;
                if (!e)return null;
                e.postCompile && (n = true);
                for (var a = this._compile(e, false), r = 0, l = e.children.length; l > r; r++)if (i = e.children[r], !i.isPage || !t || i.getId() === t) {
                    o = this._render(i, t, n);
                    var s = e.getRenderTarget(e.$rendered);
                    s ? s.appendChild(o) : (console.info("APPENDED TO DOM", e.$rendered), e.$rendered.appendChild(o))
                }
                return a
            }, renderChildTree2: function (e, t, n) {
                if (!n)return this._render(e, t);
                var i = this._render(e, t);
                return this.$frameCompile(i)(this.$frameRootScope)[0]
            }, renderChildTree: function (e, t, n) {
                return this.renderChildTree2(e, t, n)
            }, compile: function (e) {
                var t;
                return t = this.$frameCompile(e.$rendered)(this.getScope(e))[0], e.setRendered(t, this.$frameAngular.element), t
            }, renderAsNode: function (e, t) {
                return this.renderChildTree2(e.getRoot(), t)
            }, _renderAsHtml: function (e, t) {
                var n, i, o;
                o = e.dom(this.$frameAngular, this.$frameDocument), this.annotateNode(o, e, true);
                var a = e.getRenderTarget(o);
                if (t && t.getId() === e.getId())return o;
                for (var r = 0, l = e.children.length; l > r; r++)n = e.children[r], i = this._renderAsHtml(n, t), a ? a.appendChild(i) : o.appendChild(i);
                return o
            }, renderAsHtml: function (e, t) {
                var n = this._renderAsHtml(e, t);
                return html_beautify(n.outerHTML, {indentSize: 2, unformatted: ["textarea"]})
            }
        };
        return window.DocumentRenderer = e, e
    }]), n.factory("ABTesting", ["Config", "User", "Stats", "$http", "$rootScope", function (e, t, n, i, o) {
        var a = e.get("creator_api_url"), r = (e.get("api_url"), {
            get: function (e, t) {
                var r = o.creatorUser;
                if ("undefined" == typeof r.data.ab && (r.data.ab = {}), "undefined" != typeof r.data.ab[e])return r.data.ab[e];
                var l = t[Math.floor(Math.random() * t.length)];
                return r.data.ab[e] = l, i.post(a + "/user/data", {data: r.data}).then(function (e) {
                }, function (e) {
                }), n.t("AB Testing", {key: e, value: l}), l
            }
        });
        return r
    }]), n.directive("autofocus", ["$timeout", function (e) {
        return {
            restrict: "A", link: function (t, n) {
                e(function () {
                    n[0].focus()
                })
            }
        }
    }]), n.constant("NodeType", {ELEMENT: 1, TEXT: 3, COMMENT: 8}).factory("DOM", ["NodeType", function (e) {
        return {
            getBounds: function (t) {
                if (t.nodeType !== e.ELEMENT)return [[], [], [], []];
                var n = t.offsetLeft, i = t.offsetTop, o = t.offsetWidth, a = t.offsetHeight;
                return [[n, i], [n + o, i], [n + o, i + a], [n, i + a]]
            }, isBefore: function (e, t, n) {
                var i = e.getBoundingClientRect(), o = i.top + i.height / 2;
                return n < i.bottom ? o > n : void 0
            }, getIndexAtPoint: function (e, t, n) {
                var i, o, a;
                for (i = 0, o = e.length; o > i; i++)if (a = e[i], this.isBefore(a, t, n))return i;
                return -1
            }, getNodeAtPoint: function (e, t, n) {
                var i = e.elementFromPoint(t, n);
                return i
            }
        }
    }]), n.directive("toggle", [function () {
        return {
            restrict: "A", link: function (e, t, n) {
                t.tooltip()
            }
        }
    }]), n.directive("contenteditable", function () {
        return {
            restrict: "A", require: "?ngModel", link: function (e, t, n, i) {
                function o() {
                    var e = t.html();
                    n.stripBr && "<br>" == e && (e = ""), i.$setViewValue(e)
                }

                i && (console.log(i), i.$render = function () {
                    t.html(i.$viewValue || "")
                }, t.on("blur keyup change", function () {
                    e.$apply(o)
                }), o())
            }
        }
    }), n.run(["$rootScope", "User", function (e, t) {
        var n = {};
        location.search.substr(1).split("&").forEach(function (e) {
            n[e.split("=")[0]] = e.split("=")[1]
        }), e.queryParams = n, t.getCreatorUser().then(function (t) {
            console.log("Creator user", t), e.creatorUser = t
        }), e.hasTeamPlan = function (t) {
            var n = e.creatorUser;
            if (!n)return false;
            if (n.teams.length > 0 && t !== true)return true;
            if (!n.subscription)return false;
            var i = n.subscription.plan_id_string;
            return i.indexOf("agency") >= 0 || i.indexOf("business") >= 0 ? true : false
        }, e.shouldShowAvailableProjects = function () {
            var t = e.creatorUser;
            return e.projects && e.projects.length ? t && t.subscription ? !e.hasTeamPlan() : true : false
        }, e.getNumPersonalProjects = function () {
            return e.projects.filter(function (e) {
                return !e.team_id
            }).length
        }, e.getAvailableProjects = function () {
            if (!e.creatorUser)return 1;
            var t = e.creatorUser;
            return t.subscription ? "dev" == t.subscription.plan_id_string ? 1 : t.subscription.plan_id_string.indexOf("pro") >= 0 ? 5 : void 0 : 1
        }
    }]).controller("DashboardCtrl", ["$scope", "$state", "$rootScope", "User", "Plans", "Team", "PlansModal", "Stats", "$timeout", "ABTesting", function (e, t, n, i, o, a, r, l, s, d) {
        e.userService = i, e.path = [], e.selectedProjectFilter = "all", e.selectProjectFilter = function (t) {
            e.selectedProjectFilter = t
        }, e.selectedTeamName = function (e, t) {
            return _.findWhere(e, {id: t}).name
        }, e.projectFilter = function (e, t) {
            return "all" == t ? true : "myprojects" == t ? null == e.team_id : e.team_id == t
        }, e.filterProjects = function (t) {
            return e.projectFilter(t, e.selectedProjectFilter)
        }, e.numProjectsByChoice = function (t) {
            var n = 0;
            return e.projects.forEach(function (i) {
                e.projectFilter(i, t) && (n += 1)
            }), n
        }, e.upgradeModal = function (e) {
            l.t(e), t.go("dashboard.upgrade")
        }, e.projectsUpgrade = function () {
            o.show("more-projects")
        }, e.loadTeams = function () {
            a.all().then(function (t) {
                e.teams = t
            })
        }, e.loadTeams(), o.getPlans().then(function (i) {
            if (n.plans = i, e.queryParams.billing_err) {
                t.go("dashboard.upgrade");
                var o = {};
                e.queryParams.billing_plan.indexOf("pro") > -1 ? o.plan = 1 : o.plan = 2, e.queryParams.billing_plan.indexOf("yearly") > -1 ? o.period = "annually" : o.period = "monthly", r.show(void 0, void 0, e.queryParams.billing_err, o)
            }
            i = i.sort(function (e, t) {
                return "Dev" == e.name ? -1 : "Dev" == t.name ? 1 : e.weight - t.weight
            }), i.forEach(function (e) {
                e.features = e.features.map(function (e) {
                    return e.text ? e : 0 == e.indexOf("-") ? {anti: true, text: e.slice(1)} : {text: e}
                }), 0 == e.monthly_price ? e._priceName = "Free" : e._priceName = "$" + e.monthly_price
            })
        }), e.pushPath = function (t) {
            e.path.push(t)
        }, e.setPath = function (t) {
            e.path = t
        }
    }]).controller("DashboardPaymentCtrl", ["$scope", "$timeout", "Stats", "$rootScope", "$http", function (e, t, n, i, o) {
    }]).controller("UpgradeCtrl", ["$state", "$rootScope", "$http", "$compile", "$document", "$q", "Config", "Stats", "Coupon", "$scope", "smoothScroll", "PlansModal", "Stats", "ShareModal", function (e, t, n, i, o, a, r, l, s, d, c, p, l, u) {
        u.hideModal(), l.t("Upgrade Page"), d.monthly = {pro: 29, agency: 99, business: 399}, d.annually = {
            pro: 24,
            agency: 89,
            business: 359
        }, d.setPeriod = function (e) {
            d.period = e, "monthly" == e ? l.t("Set Monthly", {type: "landing"}) : l.t("Set Annual", {type: "landing"})
        }, d.setPeriod("annually"), d.learnMore = function () {
            c(document.getElementById("learnmore"), {containerId: "dashboard"}), l.t("Upgrade Landing Learn More")
        }, d.upgradePro = function (e) {
            p.show(void 0, void 0, void 0, {
                period: d.period,
                plan: 1
            }), l.t("Upgrade Landing Upgrade Button", {plan: "pro", position: e})
        }, d.upgradeTeam = function (e) {
            p.show(void 0, void 0, void 0, {
                period: d.period,
                plan: 2
            }), l.t("Upgrade Landing Upgrade Button", {plan: "team", position: e})
        }, d.hasPlan = function (e) {
            var n = t.creatorUser && t.creatorUser.subscription;
            if (!n && "dev" == e)return true;
            if (!n)return false;
            var i = n.plan_id_string.replace("-yearly", "");
            return i == e && n.active ? true : false
        }
    }]).controller("DashboardProjectsCtrl", ["$scope", "$stateParams", "$state", "Project", "ProjectDialog", "Projects", "Designer", "Exporter", "Stats", "ShareModal", "$rootScope", "StandardModal", "Plans", "MoveModal", "IconSplashModal", function (e, t, n, i, o, a, r, l, s, d, c, p, u, g, h) {
        c.projects = [], c.loadingIndicator = true, i.all().$promise.then(function (e) {
            c.projects = e, c.loadingIndicator = false
        }), e.getAppIcon = function (e) {
            return e.app_icon_url ? e.app_icon_url : "/img/creator-placeholder-icon.png"
        };
        var m = t.isNew;
        console.log("PROJECTS. New?", m), e.doUpgrade = function () {
            s.t("Project Limit Footer Upgrade Button"), n.go("dashboard.upgrade")
        }, e.newProject = function () {
            return s.t("New Project Modal", {}), 0 == e.teams.length && c.getNumPersonalProjects() >= c.getAvailableProjects() ? void u.show("more-projects") : void o.go(e.teams).then(function (t) {
                e.close(), s.t("Create Project Button", {}), s.increment("projects", 1), a.createNew(t.name, t.template, t.team)
            })
        }, e.moveProject = function (t, n) {
            g.show(n, e.teams), t.stopPropagation()
        }, e.publicPrivateClick = function (t, n) {
            s.t("Click Public/Private Status", {status: n.share_code || n.share_lock}), e.shareProject(t, n)
        }, e.shareProject = function (e, t) {
            d.show(t), e.stopPropagation()
        }, e.exportProject = function (e, t) {
            l["export"](t), e.stopPropagation()
        }, e.duplicateProject = function (t, n) {
            return t.stopPropagation(), null == n.team_id && c.shouldShowAvailableProjects() && c.getNumPersonalProjects() >= c.getAvailableProjects() ? (e.doUpgrade(), false) : (s.t("Duplicate Project", {}), void n.$clone().then(function (t) {
                e.projects = [], c.loadingIndicator = true, i.all().$promise.then(function (t) {
                    e.projects = t, c.loadingIndicator = false
                })
            }))
        }, e.editIconSplash = function (e, t) {
            h.show(t), e.stopPropagation()
        }, e.editAppIcon = function (e, t) {
            s.t("Edit App Icon", {}), filepicker.setKey("AabgSObTT8yIzUSh8zMNAz"), filepicker.pickAndStore({
                mimetype: "image/*",
                customCss: "https://creator.ionic.io/css/filepicker.css",
                location: "S3",
                cropRatio: 1,
                services: ["CONVERT", "COMPUTER", "GOOGLE_DRIVE", "DROPBOX", "BOX", "URL", "WEBCAM", "IMAGE_SEARCH"],
                conversions: ["crop"]
            }, {location: "S3"}, function (e) {
                e.length > 0 && (t.app_icon_url = e[0].url, t.$save().then(function (e) {
                }))
            }), e.stopPropagation()
        }, e.unToggle = function (e, t) {
            t.val = !t.val, e.stopPropagation()
        }, e.editProjectName = function (t, n, i) {
            i.val = true, e.oldProjectName = n.name, t.stopPropagation()
        }, e.saveProjectName = function (e, t, n) {
            s.t("Change Project Name", {}), t.$save().then(function (e) {
                n.val = false
            }), e.stopPropagation()
        }, e.deleteProject = function (t, n) {
            s.t("Delete Project Modal Show", {}), p.hideModal(), p.show({
                message: 'Are you sure? Deleting a project cannot be undone. To confirm you wish to delete this project, please type "DELETE" in the box below, then click "Delete Project":',
                title: "Delete Project",
                requiredInput: "DELETE",
                cancel: "Cancel",
                warning: "Delete Project",
                height: "385px",
                callback: function (t) {
                    "warning" === t && (s.t("Delete Project", {project: n}), n.$del().then(function (t) {
                        e.projects.splice(e.projects.indexOf(n), 1)
                    }))
                }
            }), t.stopPropagation()
        }, e.close = function () {
        }, e.openProject = function (t) {
            r.loadProject(t.app_id), e.close()
        }
    }]).controller("DashboardTeamsCtrl", ["$scope", "$state", "$rootScope", "Plans", "Team", "TeamAdd", "Stats", function (e, t, n, i, o, a, r) {
        function l(t) {
            console.log("Team added", t, arguments), t ? (console.log("DID ADD"), e.loadTeams()) : console.log("DID NOT ADD")
        }

        console.log("Teams", e.queryParams), n.loadingIndicator = false;
        var s = false;
        e.$watch("creatorUser", function (t, i) {
            t && "add-team" == e.queryParams.upgrade && n.hasTeamPlan() && (s = true, a.addTeam(true).then(l))
        }), e.addTeam = function (t) {
            return r.t("Add Team Button", {}), t ? void a.addTeam(true).then(l) : e.openSlots && e.openSlots.length > 0 ? void a.addTeam(true).then(l) : e.hasTeamPlan(true) ? void a.addTeam().then(l) : void i.can("add-team").then(function (e) {
                e ? a.addTeam().then(l) : i.show("add-team", "team")
            }, function (e) {
            })
        }
    }]).controller("DashboardTeamCtrl", ["$scope", "$stateParams", "Plans", "Team", "TeamAdd", "TeamInvite", "PlansModal", "Stats", function (e, t, n, i, o, a, r, l) {
        function s() {
            i.get(t.id).then(function (t) {
                e.team = t
            })
        }

        console.log("Single team", t), e.getAppIcon = function (e) {
            return e.app_icon_url ? e.app_icon_url : "/img/creator-placeholder-icon.png"
        }, e.openProject = function (t) {
            Designer.loadProject(t.app_id), e.close()
        }, e.showTeamManagement = function () {
            e.showManage = !e.showManage
        }, e.addMember = function () {
            l.t("Add Team Member Button", {});
            try {
                a.open(e.team, function () {
                    s()
                })
            } catch (t) {
                n.show("add-member", "team")
            }
        }, e.removeMember = function (t, n) {
            l.t("Remove Team Member Button", {}), i.removeMember(e.team, t.id, n).then(function () {
                s()
            }, function (e) {
                alert("Unable to remove member. Please contact support")
            })
        }, e.upgradeTeam = function () {
            r.show(e.team)
        }, s()
    }]).controller("DashboardTeamInviteCtrl", ["$scope", "$timeout", "$stateParams", "Plans", "Team", "Stats", function (e, t, n, i, o, a) {
        e.data = {emails: ""}, e.sendInvites = function (n) {
            t.cancel(e.statusTimeout), a.t("Send Team Invites", {emails: e.data.emails}), e.status = "Sending invites...", o.invite(e.team, e.data.emails).then(function (n) {
                e.status = "Sent!", e.statusTimeout = t(function () {
                    e.status = ""
                }, 3e3), e.data.emails = ""
            }, function (t) {
                t.data.error && "over_limit" == t.data.error ? e.status = "You have reached the invite limit for your plan. Please upgrade." : e.status = "Unable to send invites. Please contact support."
            }), n.preventDefault()
        }
    }]).controller("DashboardAddTeamCtrl", ["$scope", "TeamAdd", function (e, t) {
        e.addTeam = function () {
            t.addTeam()
        }
    }]).controller("DashboardHelpCtrl", ["$scope", "$sce", "$compile", function (e, t, n) {
        e.buttons = {right: []}
    }]).controller("DashboardHelpIndexCtrl", ["$scope", function (e) {
        e.setPath([{title: "Help", state: "dashboard.help.index"}])
    }]).controller("DashboardHelpVideosCtrl", ["$scope", "Tutorials", function (e, t) {
        e.setPath([{title: "Help", state: "dashboard.help.index"}, {
            title: "Videos",
            state: "dashboard.help.videos"
        }]), e.tutorials = t.tutorials, e.openTutorial = t.show
    }]).controller("DashboardHelpSupportCtrl", ["$scope", function (e) {
        e.buttons.right = [{
            title: "Get in touch",
            type: "btn-success",
            href: "mailto:help@usecreator.com"
        }, {
            title: "Tweet at us!",
            type: "btn-info",
            href: "http://twitter.com/IonicCreator",
            target: "_blank"
        }], e.setPath([{title: "Help", state: "dashboard.help.index"}, {
            title: "Support",
            state: "dashboard.help.support"
        }])
    }]).controller("DashboardProfileCtrl", ["$scope", "Plans", function (e, t) {
    }]).controller("DashboardProfileEditCtrl", ["$scope", "$rootScope", "User", function (e, t, n) {
        e.userObject = angular.copy(t.user), e.userObject.simpleFields = true, console.info("USER OBJECT", t.user), e.userService = n, e.updateUser = function () {
            e.saving = true, e.saveErrors = null, n.save(e.userObject).then(function () {
                e.saving = false
            }, function (t) {
                e.saving = false, e.saveErrors = t.data.message, t.data.email && (e.saveErrors = t.data.email)
            })
        }
    }]).controller("DashboardProfilePasswordCtrl", ["$scope", "$rootScope", "User", function (e, t, n) {
        e.userObject = angular.copy(t.user), e.userService = n;
        var i = function () {
            e.userObject.newPassword1 = "", e.userObject.newPassword2 = "", e.userObject.oldPassword = ""
        };
        e.updateUser = function () {
            e.saving = true, e.saveErrors = null, n.save(e.userObject).then(function () {
                e.saving = false, i()
            }, function (t) {
                e.saving = false, e.saveErrors = t.data.message, t.data.email && (e.saveErrors = t.data.email)
            })
        }
    }]).controller("DashboardProfileBillingCtrl", ["$scope", "PlansModal", "ABTesting", "$state", "$rootScope", function (e, t, n, i, o) {
        e.showCard = function () {
            e.showCardForm = !e.showCardForm
        }, e.upgrade = function () {
            i.go("dashboard.upgrade")
        }, e.hasPlan = function (e) {
            var t = o.creatorUser && o.creatorUser.subscription;
            if (!t && "dev" == e)return true;
            if (!t)return false;
            var n = t.plan_id_string.replace("-yearly", "");
            return n == e && t.active ? true : false
        }, jQuery(function (e) {
            var t = e("#cardWrapper"), n = e("#cardForm"), i = e("#cardFormError"), o = n.find("button");
            t.length > 0 && (e("input[name=plan]:radio").change(function (e) {
                "free" == this.value ? t.hide() : t.show()
            }), "free" == e("input:radio[name=plan]:checked").val() && t.hide()), n.submit(function (t) {
                t.preventDefault();
                var a, r, l, s;
                return "free" != n.find("input:radio[name=plan]:checked").val() ? (o.prop("disabled", true), a = e("#card-num").val(), r = e("#card-month").val(), l = e("#card-year").val(), s = e("#card-cvc").val(), Stripe.card.createToken({
                    number: a,
                    exp_month: r,
                    exp_year: l,
                    cvc: s
                }, function (t, o) {
                    if (o.error)i.find("p").text(o.error.message), i.removeClass("hidden"), n.find("button").prop("disabled", false); else {
                        var a = o.id;
                        n.append(e('<input type="hidden" name="stripeToken" />').val(a)), n.get(0).submit()
                    }
                }), false) : void 0
            })
        })
    }]).controller("LoadErrorCtrl", ["$scope", "$stateParams", function (e, t) {
        e.projectId = t.projectId
    }]), n.directive("uiSrefActiveIf", ["$state", function (e) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", function (t, n, i) {
                function o() {
                    for (var t = a.split(","), i = 0; i < t.length; i++) {
                        var o = t[i];
                        if (e.includes(o) || e.is(o)) {
                            n.addClass("active");
                            break
                        }
                        n.removeClass("active")
                    }
                }

                var a = i.uiSrefActiveIf;
                t.$on("$stateChangeSuccess", o), o()
            }]
        }
    }]).directive("select2", ["$rootScope", "$timeout", function (e, t) {
        return {
            restrict: "E",
            require: "?ngModel",
            scope: {name: "@", placeholder: "@", items: "="},
            template: '<select><option value="">{{placeholder}}</option><option ng-repeat="item in items" value="{{item.value}}">{{item.name}}</option></select>',
            link: function (e, n, i, o) {
                var a = null, r = function (e) {
                    return e.name
                };
                _.debounce(function () {
                    $(a).select2({formatResult: r, formatSelection: r}).val(o.$viewValue).on("change", function () {
                        return null == $(this).val() ? void t(function () {
                            null != o.$viewValue && a.val(o.$viewValue).trigger("change")
                        }, 100) : void o.$setViewValue($(this).val())
                    }).trigger("change")
                }, 10);
                o.$render = function () {
                    a && a.val(o.$viewValue).trigger("change")
                }, o.$viewChangeListeners.push(function () {
                    e.$eval(i.ngChange)
                }), n.on("$destroy", function () {
                    $(a).select2("destroy")
                }), setTimeout(function () {
                    a = $(n[0].querySelector("select"))
                })
            }
        }
    }]), n.factory("IconSplashModal", ["$timeout", "$state", "$rootScope", "$http", "$compile", "$document", "$q", "Config", "Designer", "ComponentFactory", "DocumentRenderer", function (e, t, n, i, o, a, r, l, s, d, c) {
        var p, u, g = "/tmpl/dashboard/dashboard-iconsplash.tmpl.html", h = function (e) {
            var t = n.$new();
            i.get(g).then(function (i) {
                var r = o(i.data)(t);
                p = r, a[0].body.appendChild(r[0]), ("undefined" == typeof s.getProject() || e.id !== s.getProject().id) && (s.init(), d.clearIdMap(), s.setProject(e), c.setFrameInjectables(o, n, document, angular, window)), t.app = s.getExtra("iconsplash", {
                    icon: "",
                    icon_img: "",
                    icon_name: "",
                    splash: "",
                    splash_img: "",
                    splash_name: ""
                });
                var l = s.getExtra("iconsplash", {
                    icon: "",
                    icon_img: "",
                    icon_name: "",
                    splash: "",
                    splash_img: "",
                    splash_name: ""
                }), g = e.app_icon_url;
                t.cancel = function () {
                    e.app_icon_url = g, s.setExtra("iconsplash", l), n.$emit("iconsplash"), u.hideModal()
                }, t.uploadingIcon = false, t.deleteIcon = function () {
                    e.app_icon_url = "", t.app = {
                        icon: "",
                        icon_img: "",
                        icon_name: "",
                        splash: t.app.splash,
                        splash_img: t.app.splash_img,
                        splash_name: t.app.splash_name
                    }, s.setExtra("iconsplash", t.app), n.$emit("iconsplash")
                }, t.uploadIcon = function () {
                    function i(i, o) {
                        filepicker.convert(o, {width: 140, height: 140}, function (a) {
                            e.app_icon_url = "https://s3.amazonaws.com/ionic-io-static/" + a.key;
                            var r = i.key.split("_");
                            r.shift(), r = r.join("_"), t.app = {
                                icon: "https://s3.amazonaws.com/ionic-io-static/" + i.key,
                                icon_img: "https://s3.amazonaws.com/ionic-io-static/" + o.key,
                                icon_name: r,
                                splash: t.app.splash,
                                splash_img: t.app.splash_img,
                                splash_name: t.app.splash_name
                            }, s.setExtra("iconsplash", t.app), n.$emit("iconsplash"), t.uploadingIcon = false
                        }, function () {
                            t.uploadingIcon = false
                        })
                    }

                    t.uploadingIcon = true, filepicker.setKey("AabgSObTT8yIzUSh8zMNAz"), filepicker.pickAndStore({
                        extensions: [".png", ".psd", ".ai"],
                        multiple: false,
                        customCss: "https://creator.ionic.io/css/filepicker.css",
                        location: "S3",
                        services: ["COMPUTER", "GOOGLE_DRIVE", "DROPBOX", "BOX", "URL"]
                    }, {location: "S3"}, function (e) {
                        if (e.length > 0) {
                            var n = e[0];
                            n.filename.indexOf(".psd") > -1 || n.filename.indexOf(".ai") > -1 ? filepicker.convert(n, {format: "png"}, function (e) {
                                i(n, e)
                            }) : i(n, n)
                        } else t.uploadingIcon = false
                    }, function () {
                        t.uploadingIcon = false
                    })
                }, t.uploadingSplash = false, t.deleteSplash = function () {
                    t.app = {
                        splash: "",
                        splash_img: "",
                        splash_name: "",
                        icon: t.app.icon,
                        icon_img: t.app.icon_img,
                        icon_name: t.app.icon_name
                    }, s.setExtra("iconsplash", t.app), n.$emit("iconsplash")
                }, t.uploadSplash = function () {
                    function e(e, i) {
                        filepicker.convert(i, {width: 400, height: 400}, function (i) {
                            var o = e.key.split("_");
                            o.shift(), o = o.join("_"), t.app = {
                                splash: "https://s3.amazonaws.com/ionic-io-static/" + e.key,
                                splash_img: "https://s3.amazonaws.com/ionic-io-static/" + i.key,
                                splash_name: o,
                                icon: t.app.icon,
                                icon_img: t.app.icon_img,
                                icon_name: t.app.icon_name
                            }, s.setExtra("iconsplash", t.app), n.$emit("iconsplash"), t.uploadingSplash = false
                        }, function () {
                            t.uploadingSplash = false
                        })
                    }

                    t.uploadingSplash = true, filepicker.setKey("AabgSObTT8yIzUSh8zMNAz"), filepicker.pickAndStore({
                        extensions: [".png", ".psd", ".ai"],
                        multiple: false,
                        customCss: "https://creator.ionic.io/css/filepicker.css",
                        location: "S3",
                        services: ["COMPUTER", "GOOGLE_DRIVE", "DROPBOX", "BOX", "URL"]
                    }, {location: "S3"}, function (n) {
                        if (n.length > 0) {
                            var i = n[0];
                            i.filename.indexOf(".psd") > -1 || i.filename.indexOf(".ai") > -1 ? filepicker.convert(i, {format: "png"}, function (t) {
                                e(i, t)
                            }) : e(i, i)
                        } else t.uploadingSplash = false
                    }, function () {
                        t.uploadingSplash = false
                    })
                }, $(p).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), t.$destroy(), $(p).remove(), p = null
                }), u.showModal()
            }, function (e) {
            })
        };
        return u = {
            show: function (e) {
                Stats.t("IconSplash Modal Show", {}), h(e)
            }, showModal: function () {
                p && $(p).modal("show")
            }, hideModal: function () {
                p && $(p).modal("hide")
            }
        }
    }]), n.factory("MoveModal", ["$state", "$rootScope", "$http", "$compile", "$document", "$timeout", "$q", "Config", "Stats", function (e, t, n, i, o, a, r, l, s) {
        var d, c, d, c, p = "/tmpl/dashboard/dashboard-move-project.tmpl.html", u = function (e, a) {
            var r = t.$new();
            r.data = {project: e}, r.teams = a, r.moveProject = function () {
                console.log("Moving project to team", r.team), e.team_id = r.team && r.team.id || null, e.$move().then(function (e) {
                    c.hideModal()
                }, function (e) {
                    alert("Unable to move project. Please contact support"), console.error(e)
                })
            };
            for (var l = 0; l < a.length; l++)if (a[l].id == e.team_id) {
                r.team = a[l];
                break
            }
            n.get(p).then(function (e) {
                var t = i(e.data)(r);
                d = t, o[0].body.appendChild(t[0]), $(d).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), r.$destroy(), $(d).remove(), d = null
                }), c.showModal()
            }, function (e) {
            })
        };
        return c = {
            show: function (e, t) {
                s.t("Move Project Show"), u(e, t)
            }, showModal: function () {
                d && $(d).modal("show")
            }, hideModal: function () {
                d && $(d).modal("hide")
            }
        }
    }]), n.factory("Plans", ["$http", "$q", "$rootScope", "Config", "PaywallModal", function (e, t, n, i, o) {
        var a = {}, r = t.defer();
        return e.get(i.get("creator_api_url") + "/plans").then(function (e) {
            a.plans = e.data, r.resolve(e.data)
        }, function (e) {
            r.reject(e), console.error(e)
        }), e.get(i.get("creator_api_url") + "/user/plan").then(function (e) {
        }, function (e) {
            console.error(e)
        }), {
            getPlans: function () {
                return r.promise
            }, can: function (e, i) {
                var o = t.defer(), a = n.creatorUser;
                if (a.subscription)if ("dev" == a.subscription.plan_id_string)o.resolve(false); else {
                    var r = a.subscription.plan_id_string;
                    switch (e) {
                        case"add-team":
                            r.indexOf("team") >= 0 || r.indexOf("agency") >= 0 || r.indexOf("team") >= 0 ? o.resolve(true) : o.resolve(false);
                            break;
                        case"password-protect":
                            null !== i.team_id || r.indexOf("pro") >= 0 || r.indexOf("team") >= 0 || r.indexOf("agency") >= 0 || r.indexOf("team") >= 0 ? o.resolve(true) : o.resolve(false);
                            break;
                        default:
                            o.reject("Invalid permission type")
                    }
                } else o.resolve(false);
                return o.promise
            }, show: function (e, t) {
                o.show(e, t)
            }, hide: function () {
                o.hideModal()
            }
        }
    }]), n.factory("PaywallModal", ["$state", "$rootScope", "$http", "$compile", "$document", "$timeout", "$q", "Config", "PlansModal", "Stats", "ABTesting", function (e, t, n, i, o, a, r, l, s, d, c) {
        var p, u, g = function (r, l) {
            var s = t.$new();
            s.data = {}, s.upgrade = function (t) {
                d.t("Paywall Upgrade Click", {template: r}), e.go("dashboard.upgrade"), a(function () {
                    u.hideModal()
                }, 10)
            };
            n.get(r).then(function (e) {
                var t = i(e.data)(s);
                p = t, o[0].body.appendChild(t[0]), $(p).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), s.$destroy(), $(p).remove(), p = null
                }), u.showModal()
            }, function (e) {
            })
        }, h = {
            "add-team": "/tmpl/dashboard/paywalls/team-upgrade.tmpl.html",
            "add-member": "/tmpl/dashboard/paywalls/team-member-upgrade.tmpl.html",
            "password-protect": "/tmpl/dashboard/paywalls/password-protect.tmpl.html",
            "more-projects": "/tmpl/dashboard/paywalls/more-projects.tmpl.html"
        }, m = {
            "add-team": "/tmpl/dashboard/paywalls/team-upgrade.old.tmpl.html",
            "add-member": "/tmpl/dashboard/paywalls/team-member-upgrade.old.tmpl.html",
            "password-protect": "/tmpl/dashboard/paywalls/password-protect.old.tmpl.html",
            "more-projects": "/tmpl/dashboard/paywalls/more-projects.old.tmpl.html"
        };
        return u = {
            show: function (e, t) {
                var n = c.get("PayWall " + e, ["new", "old"]);
                if ("new" == n)var i = h; else var i = m;
                d.t("Paywall Modal Show", {feature: e, planType: t}), g(i[e])
            }, showModal: function () {
                p && $(p).modal("show")
            }, hideModal: function () {
                p && $(p).modal("hide")
            }
        }
    }]), n.factory("PlansModal", ["$state", "$rootScope", "$http", "$compile", "$document", "$q", "Config", "Stats", "Coupon", "User", function (e, t, n, i, o, a, r, l, s, d) {
        var c, p, u = "/tmpl/dashboard/payment-form.tmpl.html", g = "pro3", h = function (e, a, r, h) {
            var m = t.$new();
            m.data = {
                showPaymentForm: !(t.creatorUser && t.creatorUser.stripe_card_last_4),
                showTeamPlans: a,
                monthlyAnnualToggle: true,
                coupon: "",
                couponResponse: {valid: false},
                hideAnnualToggle: false
            }, m.$watch("data.coupon", function () {
                m.data.coupon = m.data.coupon.toUpperCase().replace(/ /g, ""), "FREEMONTH" == m.data.coupon ? (m.data.hideAnnualToggle = true, m.setMonthly()) : m.data.hideAnnualToggle = false, s.check({couponId: m.data.coupon}).$promise.then(function (e) {
                    console.log("COUPON", e), m.data.coupon == e.id && (1 == e.valid ? m.data.couponResponse = e : m.data.couponResponse = {valid: false})
                })
            }), m.queryParams.coupon && (m.data.coupon = m.queryParams.coupon, m.couponCodeShowing = true), m.err = r && unescape(r), m.team = e, m.discount = .1, m.planType = "-yearly", m.section = "plans", m.selectedPlan = m.plans[2], m.updateMonthlyAnnual = function () {
                1 == m.data.monthlyAnnualToggle ? m.setAnnual() : m.setMonthly()
            }, m.setMonthly = function () {
                m.discount = 0, m.planType = "", l.t("Set Monthly", {type: "modal"}), m.data.monthlyAnnualToggle = false
            }, m.setAnnual = function () {
                m.discount = .1, m.planType = "-yearly", l.t("Set Annual", {type: "modal"}), m.data.monthlyAnnualToggle = true
            }, "undefined" != typeof h && (m.section = "payment", "annually" == h.period ? m.setAnnual() : m.setMonthly(), m.selectedPlan = m.plans[h.plan]), m.hasPlan = function (e) {
                var n = t.creatorUser && t.creatorUser.subscription;
                if (!n && "dev" == e.plan_id)return true;
                if (!n)return false;
                var i = n.plan_id_string.replace("-yearly", "");
                return i == e.plan_id && n.active ? true : false
            }, m.shouldDisable = function (e, t) {
                return false
            }, m.shouldHighlight = function (t, n) {
                var i = _.get(e, "subscription.plan.plan_id");
                {
                    if (!i)return 2 == n;
                    if (i == t.plan_id)return n > 2
                }
            }, m.getPlanPrice = function (e) {
                var t = m.discount;
                return e.plan_id == g && (t = m.discount ? .2 : 0), Math.floor(e.monthly_price - e.monthly_price * t)
            }, m.getValidDuration = function () {
                var e = m.data.couponResponse.duration_in_months;
                return null == e && (e = 1), "yr" != m.getPlanDuration() ? e + " Month(s)" : 12 > e ? "1 Year" : 12 == e ? "1 Year" : e > 12 ? Math.ceil(e / 12) + "Years" : void 0
            }, m.getNormalPrice = function () {
                if (!m.selectedPlan)return 0;
                var e = m.selectedPlan.monthly_price, t = m.discount;
                return m.selectedPlan.plan_id == g && m.discount > 0 && (e = 24, t = 0), m.discount > 0 && (e = Math.floor(12 * (e - e * t))), e
            }, m.getFinalPrice = function () {
                if (!m.selectedPlan)return 0;
                var e = m.selectedPlan.monthly_price, t = m.discount;
                return m.selectedPlan.plan_id == g && m.discount > 0 && (e = 24, t = 0), m.discount > 0 && (e = Math.floor(12 * (e - e * t))), 1 == m.data.couponResponse.valid && (e *= (100 - m.data.couponResponse.percent_off) / 100), e
            }, m.getPlanDuration = function () {
                return m.discount > 0 ? "yr" : "mo"
            }, m.validCoupon = function () {
                return m.data.couponResponse.valid ? true : false
            }, m.getSavings = function () {
                if (!m.selectedPlan)return 0;
                var e = 1;
                return m.discount > 0 && (e = 12), m.selectedPlan.monthly_price * e - m.getFinalPrice()
            }, m.showCouponCode = function () {
                m.couponCodeShowing = true, console.log("Coupon")
            }, m.selectPlan = function (e, t) {
                l.t("Select Plan", {plan: e.plan_id}), m.shouldDisable(e, t) || (m.section = "payment", m.selectedPlan = e)
            }, m.paymentFormCardType = "Unknown", m.getCreditCardType = function (e) {
                return /^5[1-5]/.test(e) ? "MasterCard" : /^4/.test(e) ? "Visa" : /^3[47]/.test(e) ? "American Express" : /^6(?:011\d{12}|5\d{14}|4[4-9]\d{13}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10})$/.test(e) ? "Discover" : "Unknown"
            }, m.paySubmit = function () {
                m.err = "";
                var e = ($("#cardWrapper"), $("#payment-form")), i = ($("#payment-form-error"), e.find("button")), o = $("#usingStoredCard").val();
                if ("true" == o) {
                    console.log("using stored card"), l.t("Submit Payment Form", {plan: m.selectedPlan.plan_id + m.planType}), i.prop("disabled", true);
                    var a = {};
                    return a.teamId = $('input[name="teamId"]').val(), a.planId = $('input[name="planId"]').val(), a.coupon = $('input[name="coupon"]').val(), n({
                        method: "POST",
                        url: "/stripe/upgrade",
                        data: a
                    }).success(function (e, n, o) {
                        e.err ? (m.err = e.err, i.prop("disabled", false)) : d.getCreatorUser(true).then(function () {
                            console.info("NEW CREATOR USER", t.creatorUser), m.section = "upgradesuccess"
                        }, function () {
                            console.error("FAILED TO GET CREATOR USER")
                        })
                    }).error(function (e, t, n) {
                        m.err = "There was an issue upgrading your account, please contact support.", i.prop("disabled", false)
                    }), false
                }
                l.t("Submit Payment Form", {plan: m.selectedPlan.plan_id + m.planType});
                var r, s, c, u;
                return i.prop("disabled", true), cardName = $("#pay-card-name").val(), r = $("#pay-card-num").val(), s = $("#pay-card-month").val(), c = $("#pay-card-year").val(), u = $("#pay-card-cvc").val(), Stripe.card.createToken({
                    name: cardName,
                    number: r,
                    exp_month: s,
                    exp_year: c,
                    cvc: u
                }, function (o, a) {
                    if (l.t("STRIPE", {
                            status: o,
                            response: a
                        }), a.error)l.t("Payment Failure", {plan: m.selectedPlan.plan_id + m.planType}), m.err = a.error.message; else {
                        l.t("Payment Stripe Token", {plan: m.selectedPlan.plan_id + m.planType});
                        var r = a.id;
                        e.append($('<input type="hidden" name="stripeToken" />').val(r)), e.append($('<input type="hidden" name="correctFormSubmit" />').val("yes"));
                        var s = {};
                        s.stripeToken = r, s.teamId = $('input[name="teamId"]').val(), s.planId = $('input[name="planId"]').val(), s.coupon = $('input[name="coupon"]').val(), n({
                            method: "POST",
                            url: "/stripe/upgrade",
                            data: s
                        }).success(function (e, n, o) {
                            e.err ? (m.err = e.err, i.prop("disabled", false)) : d.getCreatorUser(true).then(function () {
                                console.info("NEW CREATOR USER", t.creatorUser), p.hideModal(), m.section = "upgradesuccess"
                            }, function () {
                                console.error("FAILED TO GET CREATOR USER")
                            })
                        }).error(function (e, t, n) {
                            m.err = "There was an issue upgrading your account, please contact support.", i.prop("disabled", false)
                        })
                    }
                }), false
            };
            n.get(u).then(function (e) {
                var t = i(e.data)(m);
                c = t, o[0].body.appendChild(t[0]), $(c).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), m.$destroy(), $(c).remove(), c = null
                }), p.showModal()
            }, function (e) {
            })
        };
        return p = {
            show: function (e, t, n, i) {
                l.t("Plans Modal Show", {team: e, showTeamPlans: t}), h(e, t, n, i)
            }, showModal: function () {
                c && $(c).modal({backdrop: "static", keyboard: false, show: true})
            }, hideModal: function () {
                c && $(c).modal("hide")
            }
        }
    }]), n.factory("Share", ["$http", "$q", "Stats", "Config", function (e, t, n, i) {
        return {
            shareViaEmail: function (t, o) {
                return n.t("Share", {
                    mode: "email",
                    num: o.length
                }), e.post(i.get("creator_api_url") + "/share/email", {app_id: t.app_id, emails: o})
            }, shareViaSms: function (t, o) {
                return n.t("Share", {
                    mode: "sms",
                    num: o.length
                }), e.post(i.get("creator_api_url") + "/share/sms", {app_id: t.app_id, numbers: o})
            }, regenMobileCode: function (t) {
                return e.post(i.get("creator_api_url") + "/creator/" + t.app_id + "/regen-mobile-code", {})
            }
        }
    }]).factory("ShareModal", ["$timeout", "$state", "$rootScope", "$http", "$compile", "$document", "$q", "Config", "Plans", "Share", "Stats", "PlansModal", "ComponentFactory", "DocumentRenderer", "Designer", function (e, t, n, o, a, r, l, s, d, c, u, g, h, m, f) {
        var v, y, w = "/tmpl/dashboard/dashboard-share.tmpl.html", b = function (l) {
            function g() {
                var e = f.getExtra("startingPage"), t = f.getById(e);
                if ("undefined" == typeof t || "undefined" == typeof t.getParent() || "undefined" != typeof t.getParent() && null == t.getParent()) {
                    b.startingPage_required = true;
                    var n = f.getPages(), o = [];
                    for (i = 0; i < n.length; i++)p = n[i], 0 == p.get("abstract", false) && o.push({
                        value: p.getId(),
                        text: p.get("title") + " - " + p.get("url"),
                        page: p,
                        pageId: "(" + p.getId() + ")"
                    });
                    b.startingPage.pages = o
                }
            }

            var b = n.$new();
            b.Designer = f, b.startingPage_required = false, b.startingPage = {page: ""}, b.setStartingPage = function () {
                "" != b.startingPage.page && (n.ignoreFrameDocument = true, f.setExtra("startingPage", b.startingPage.page), f.AppGraph._save(), b.startingPage_required = false, n.$emit("outline.refresh"))
            }, ("undefined" == typeof f.getProject() || l.id !== f.getProject().id) && (f.init(), h.clearIdMap(), f.setProject(l), m.setFrameInjectables(a, n, document, angular, window)), g(), b.upgrade = function () {
                t.go("dashboard.upgrade"), y.hideModal()
            }, b.isPayingProject = function () {
                return n.isPayingCustomer() || null != l.team_id ? true : false
            }, b.data = {project: l, rootUrl: s.get("root_url")};
            o.get(w).then(function (t) {
                var n = a(t.data)(b);
                v = n, r[0].body.appendChild(n[0]), "" !== b.data.project.share_code && !b.data.project.share_lock && b.isPayingProject() && (console.info("RESET SHARE", b.data.project.share_code, b.data.project.share_lock), b.data.project.share_lock = "password", b.data.project.$save()), b.data.oldCode = b.data.project.share_code, b.urlPage = function () {
                    var e = document.getElementById("share-url-tab");
                    e.click()
                }, b.setPasscode = function () {
                    return u.t("Set Password Protect", {}), b.data.oldCode = b.data.project.share_code, b.data.project.share_lock = "password", "" === b.data.project.share_lock || b.isPayingProject() ? void b.data.project.$save() : (b.data.project.share_code = "", b.data.project.share_lock = "", b.data.oldCode = "", b.data.project.$save(), d.hide(), void d.show("password-protect"))
                }, b.$watch("data.project.share_lock", function (e, t) {
                    if (e != t) {
                        if (console.info("SHARE LOCK", e, t, b.isPayingProject()), "" !== b.data.project.share_lock && !b.isPayingProject()) {
                            var n = b.data.project.share_lock;
                            return b.data.project.share_code = "", b.data.project.share_lock = "", b.data.oldCode = "", b.data.project.$save(), void(("private" == n || "password" == n) && (d.hide(), d.show("password-protect")))
                        }
                        "password" !== b.data.project.share_lock && (b.data.project.share_code = "", b.data.oldCode = ""), b.data.project.$save()
                    }
                }), b.shareViaEmail = function () {
                    b.data.sharingEmails = "Sending...";
                    var t = b.data.share_emails, t = t.replace(/(?:\r\n|\r|\n)/g, ",").replace(/\s/g, "");
                    c.shareViaEmail(b.data.project, t).then(function (t) {
                        u.t("Shared Via Email", {emails: b.data.share_emails}), b.data.share_emails = "", b.data.sharingEmails = "Sent!", e(function () {
                            b.data.sharingEmails = ""
                        }, 1500)
                    }, function (e) {
                        e && (console.error(e), alert("Unable to share, please contact support"))
                    })
                }, b.shareViaSms = function () {
                    b.data.sharingSMS = "Sending...";
                    var t = b.data.share_numbers, t = t.replace(/(?:\r\n|\r|\n)/g, ",").replace(/\s/g, "");
                    c.shareViaSms(b.data.project, t).then(function (t) {
                        u.t("Share Via SMS", {numbers: b.data.share_numbers}), b.data.share_numbers = "", b.data.sharingSMS = "Sent!", e(function () {
                            b.data.sharingSMS = ""
                        }, 1500)
                    }, function (e) {
                        e && (console.error(e), alert("Unable to share, please contact support"))
                    })
                }, b.regenMobileCode = function () {
                    c.regenMobileCode(b.data.project).then(function (e) {
                        b.data.project.mobile_code = e.data.code
                    })
                }, $(v).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), b.$destroy(), $(v).remove(), v = null
                }), y.showModal()
            }, function (e) {
            })
        };
        return y = {
            show: function (e) {
                u.t("Share Modal Show", {}), b(e)
            }, showModal: function () {
                v && $(v).modal("show")
            }, hideModal: function () {
                v && $(v).modal("hide")
            }
        }
    }]), n.factory("TeamAdd", ["$state", "$rootScope", "$compile", "$http", "$document", "$q", "Config", "Team", "Stats", function (e, t, n, i, o, a, r, l, s) {
        var d, c, p = "/tmpl/dashboard/dashboard-add-team.tmpl.html", u = function (a, r) {
            var u = t.$new();
            u.data = {name: "", emails: ""}, u.willUsePlan = r, u.createTeam = function (t) {
                s.t("Create Team", {
                    name: u.data.name,
                    emails: u.data.emails
                }), u.creatingTeam = true, l.create(u.data.name, u.data.emails).then(function (t) {
                    u.creatingTeam = false, console.log("Created team", t), e.go("dashboard.team", {
                        id: t.data.id,
                        slug: t.data.slug
                    }), a.resolve(true), c.hideModal()
                }, function (e) {
                    u.creatingTeam = false, a.reject(e)
                }), t.preventDefault()
            };
            i.get(p).then(function (e) {
                var t = n(e.data)(u);
                d = t, o[0].body.appendChild(t[0]), $(d).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), u.$destroy(), $(d).remove(), d = null, a.resolve(false)
                }), c.showModal()
            }, function (e) {
            })
        };
        return c = {
            addTeam: function (e) {
                var t = a.defer();
                return s.t("Add Team Modal", {}), u(t, e), t.promise
            }, showModal: function () {
                d && $(d).modal("show")
            }, hideModal: function () {
                d && $(d).modal("hide")
            }
        }
    }]), n.factory("TeamInvite", ["$state", "$rootScope", "$compile", "$http", "$document", "Config", "Team", "Stats", function (e, t, n, i, o, a, r, l) {
        var s, d, c = "/tmpl/dashboard/dashboard-team-invite.tmpl.html", p = function (e, a) {
            var r = t.$new();
            r.team = e, r.data = {name: "", emails: ""}, r.finish = function () {
                l.t("Team Invite Modal Finish", {}), a && a()
            };
            i.get(c).then(function (e) {
                var t = n(e.data)(r);
                s = t, o[0].body.appendChild(t[0]), $(s).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), $(s).remove(), s = null, r.finish()
                }), d.showModal()
            }, function (e) {
            })
        };
        return d = {
            open: function (e, t) {
                l.t("Team Invite Modal Show", {}), p(e, t)
            }, showModal: function () {
                s && $(s).modal("show")
            }, hideModal: function () {
                s && $(s).modal("hide")
            }
        }
    }]), n.factory("Themes", ["$http", "$q", "Stats", "Config", function (e, t, n, i) {
        return {
            updateCSS: function (t, n, o, a) {
                return e.post(i.get("creator_api_url") + "/updatecss", {
                    app_id: t,
                    custom_scss_variables: n,
                    custom_scss_text: o,
                    extra_css: a
                })
            }, getCompiledCSS: function (t, n) {
                return e.get(i.get("creator_api_url") + "/getcss?app_id=" + t + "&v=" + n)
            }, getCSSURL: function (e, t) {
                return i.get("creator_api_url") + "/getcss?app_id=" + e + "&v=" + t
            }
        }
    }]).factory("ThemesModal", ["$timeout", "$state", "$rootScope", "$http", "$compile", "$document", "$q", "Config", "Plans", "Stats", "ComponentFactory", "DocumentRenderer", "Designer", "Themes", function (e, t, n, i, o, a, r, l, s, d, c, p, u, g) {
        var h, m, f = "/tmpl/dashboard/dashboard-themes.tmpl.html", v = function (t) {
            var r = n.$new();
            r.Designer = u, r.property = {fullwidth: false}, r.propertyValueChanged = function (e, t) {
                r[e] = t
            };
            i.get(f).then(function (i) {
                function l() {
                    ret = [];
                    for (var e in p)ret.push(p[e].scss);
                    return ret
                }

                function s(e) {
                    for (var t in p) {
                        var n = p[t];
                        if (n.scss == e)return n.value
                    }
                    return ""
                }

                var d = o(i.data)(r);
                h = d, a[0].body.appendChild(d[0]);
                var c;
                ace.require("ace/ext/language_tools"), c = ace.edit(d[0].querySelector(".editor")), c.setTheme("ace/theme/monokai"), c.getSession().setMode("ace/mode/scss"), c.getSession().setUseWrapMode(true), c.setShowPrintMargin(false), c.setValue(u.Themes.settings.custom_scss_text, -1), c.moveCursorToPosition(u.Themes.settings.scssCursorPosition || {
                        row: 0,
                        column: 0
                    }), e(function () {
                    console.log("scrolling to", u.Themes.settings.scssCursorPosition && u.Themes.settings.scssCursorPosition.row || 0), c.scrollToLine(u.Themes.settings.scssCursorPosition && u.Themes.settings.scssCursorPosition.row || 0, true, true, function () {
                    }), c.focus()
                }, 1e3), r.activeStyleTab = "header", r.section = u.Themes.settings.section || "theme", r.cssLoading = false, r.saveButtonMessage = "", r.showSaveButtonMessage = false, r.saveButtonMessageIcon = "", r.saveButtonMessageColor = "";
                var p = [{label: "Light", value: "#ffffff", scss: "$light"}, {
                    label: "Stable",
                    value: "#f8f8f8",
                    scss: "$stable"
                }, {label: "Positive", value: "#387ef5", scss: "$positive"}, {
                    label: "Calm",
                    value: "#11c1f3",
                    scss: "$calm"
                }, {label: "Balanced", value: "#33cd5f", scss: "$balanced"}, {
                    label: "Energized",
                    value: "#ffc900",
                    scss: "$energized"
                }, {label: "Assertive", value: "#ef473a", scss: "$assertive"}, {
                    label: "Royal",
                    value: "#886aea",
                    scss: "$royal"
                }, {label: "Dark", value: "#444444", scss: "$dark"}];
                r.colors = angular.copy(p), r.headerBackgroundTheme = u.Themes.settings.headerBackgroundTheme, r.sideMenuHeaderBackgroundTheme = u.Themes.settings.sideMenuHeaderBackgroundTheme, r.linkTheme = u.Themes.settings.linkTheme, r.pageBackgroundColor = u.Themes.settings.pageBackgroundColor, r.textColor = u.Themes.settings.textColor, r.iosFont = u.Themes.settings.iosFont, r.androidFont = u.Themes.settings.androidFont;
                for (var f = 0; f < r.colors.length; f++) {
                    var v = r.colors[f].scss;
                    v in u.Themes.settings.custom_scss_variables && (r.colors[f].value = u.Themes.settings.custom_scss_variables[v])
                }
                r.conflicts = u.Themes.variableConflicts(l()), r.showingTooltip = {}, r.setShowTooltip = function (t, n, i) {
                    e(function () {
                        r.showingTooltip[n] = i
                    }, t)
                }, r.saveSCSSText = function () {
                    r.cssLoading = true, r.saveButtonMessage = "", r.showSaveButtonMessage = false, r.saveButtonMessageIcon = "", r.saveButtonMessageColor = "";
                    var i = c.getCursorPosition();
                    u.Themes.updateCursorPosition(i), u.Themes.rememberSection(r.section);
                    for (var o = 0; o < r.colors.length; o++)if ("" == r.colors[o].value) {
                        r.colors[o].value = p[o].value.toUpperCase(), u.Themes.updateSCSSVariable(r.colors[o].scss, null);
                        var a = angular.element($("#" + r.colors[o].label + "-color-picker-ele").find("input")).scope();
                        a.update()
                    } else r.colors[o].value.trim().toLowerCase() !== p[o].value.trim().toLowerCase() ? u.Themes.updateSCSSVariable(r.colors[o].scss, r.colors[o].value) : u.Themes.updateSCSSVariable(r.colors[o].scss, null);
                    if ("positive" != r.linkTheme ? u.Themes.updateSCSSVariable("$link-color", "$" + r.linkTheme) : u.Themes.updateSCSSVariable("$link-color", null), "" == r.pageBackgroundColor && (r.pageBackgroundColor = "#FFFFFF", angular.element($("#theme-page-bg-color").find("input")).scope().update()), "" == r.textColor && (r.textColor = "#333333", angular.element($("#theme-text-color").find("input")).scope().update()), r.customscsstext = c.getValue(), u.Themes.updateSCSSText(r.customscsstext), u.Themes.updateSetting("headerBackgroundTheme", r.headerBackgroundTheme), u.Themes.updateSetting("sideMenuHeaderBackgroundTheme", r.sideMenuHeaderBackgroundTheme), u.Themes.updateSetting("linkTheme", r.linkTheme), u.Themes.updateSetting("pageBackgroundColor", r.pageBackgroundColor), u.Themes.updateSetting("textColor", r.textColor), u.Themes.updateSetting("iosFont", r.iosFont), u.Themes.updateSetting("androidFont", r.androidFont), n.$emit("colorswatch.update"), n.$emit("component.redraw"), r.conflicts = u.Themes.variableConflicts(l()), u.Themes.settings.custom_scss_variables["$link-color"]) {
                        var d = u.Themes.settings.custom_scss_variables["$link-color"];
                        d in u.Themes.settings.custom_scss_variables || u.Themes.updateSCSSVariable(d, s(d))
                    }
                    g.updateCSS(t, u.Themes.settings.custom_scss_variables, u.Themes.settings.custom_scss_text, u.Themes.extraCSS()).then(function (t) {
                        r.saveButtonMessage = "Theme Saved Successfully", r.saveButtonMessageIcon = "ion-android-checkmark-circle", r.saveButtonMessageColor = "#36be5b", r.showSaveButtonMessage = true, u.Themes.updateSetting("validCompiledCSS", true), e(function () {
                            r.showSaveButtonMessage = false
                        }, 2500), r.cssLoading = false, n.$emit("newcss")
                    }, function (e) {
                        r.saveButtonMessage = "Error Saving Theme", r.saveButtonMessageIcon = "ion-alert", r.saveButtonMessageColor = "#C00000", r.showSaveButtonMessage = true, r.cssLoading = false, n.$emit("newcss"), console.log(e)
                    })
                }, r.cancel = function () {
                    m.hideModal()
                }, $(h).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), r.$destroy(), c && c.destroy(), $(h).remove(), h = null
                }), m.showModal()
            }, function (e) {
            })
        };
        return m = {
            show: function (e) {
                d.t("Themes Modal Show", {}), v(e)
            }, showModal: function () {
                h && $(h).modal("show")
            }, hideModal: function () {
                h && $(h).modal("hide")
            }
        }
    }]), n.directive("appStatus", ["$rootScope", "$interval", "Designer", function (e, t, n) {
        return {
            restrict: "E", templateUrl: "designer/app-status.tmpl.html", scope: {}, link: function (e, i, o) {
                t(function () {
                    e.currentTime = new Date
                }, 1e3);
                e.designer = n
            }
        }
    }]), n.directive("appComponents", ["$rootScope", "ComponentTypes", "Designer", "DragHandler", function (e, t, n, i) {
        return {
            restrict: "E",
            scope: {component: "="},
            templateUrl: "designer/app-components.tmpl.html",
            link: function (e, n, o) {
                n.on("click", "a", function (e) {
                    return false
                }), n.on("dblclick", "a", function (e) {
                    return false
                }), i.setElement(n);
                var a = t.getSortedInstances(), r = [];
                for (var l in a)for (var s = a[l], d = 0; d < s.length; d++)r.push(s[d]);
                e.componentGroups = a, e.components = r
            }
        }
    }]), n.directive("focusMe", ["$timeout", "$parse", function (e, t) {
        return {
            link: function (n, i, o) {
                var a = t(o.focusMe);
                n.$watch(a, function (t) {
                    t === true && e(function () {
                        i[0].focus()
                    })
                })
            }
        }
    }]), n.directive("formErrors", ["$rootScope", "$compile", function (e, t) {
        return {
            restrict: "A", scope: {formErrors: "="}, link: function (e, t, n) {
                var i, o = t, a = t.find("input"), r = _.debounce(function (e) {
                    13 != e.which && i && (o.removeClass("has-error"), i.hide())
                }, 10);
                a.on("keyup change", function (e) {
                    r(e)
                }), e.$watch("formErrors", function (e, t) {
                    e ? (o.addClass("has-error"), i || (i = $('<span class="help-block">' + e[0] + "</span>"), o.children().length >= 1 ? i.insertAfter(o.children()[0]) : i.appendTo(o)), i.show()) : (i && i.hide(), o.removeClass("has-error"))
                })
            }
        }
    }]), n.constant("REDRAW_FREQ", 300).directive("appPreview", ["DocumentRenderer", "Designer", "Themes", "DropHandler", "$timeout", "$compile", "$rootScope", "REDRAW_FREQ", "$sce", function (e, t, n, i, o, a, r, l, s) {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "app-frame.tmpl.html",
            scope: {doc: "="},
            link: function (a, d, c) {
                var p, u, g, h, m, f = r;
                d.on("$destroy", function () {
                    h && h.destroy()
                }), r.$on("document.propertyChanged", function (e, t, n) {
                    "undefined" != typeof n && (n.isPlaceholder || (n.canRedrawSingle === false ? S(n) : P(n)))
                }), r.$on("component.redraw", function (e, t) {
                    b()
                }), r.$on("component.childAdded", function (e, t, n) {
                    n.isPlaceholder || t.isPage || b()
                }), r.$on("component.childRemoved", function (e, t, n) {
                    n.isPlaceholder || b()
                }), r.$on("designer.statusbartoggle", function (e, t) {
                    g.document.body.className = g.document.body.className.replace(" header-hack", ""), 1 == t && (g.document.body.className += " header-hack")
                }), a.$watch(function () {
                    return t.getMode()
                }, function (e, t) {
                    v(e)
                }), a.$watch(function () {
                    return t.getActivePage()
                }, function (e, t) {
                    e !== p && (p = e, b())
                }), a.trustSrc = function (e) {
                    return s.trustAsResourceUrl(e)
                };
                var v = function (e) {
                    "design" === e ? h && h.enable() : "preview" === e && h && h.disable()
                };
                r.$on("newcss", function (e) {
                    $(g.document.head).find("link[id=android-default-font]").remove(), $(g.document.head).find("link[id=ios-default-font]").remove(), "default" == t.Themes.settings.androidFont && $(g.document.head).append("<link id='android-default-font' rel='text/css' href='/css/android-default-font.css'>"), "default" == t.Themes.settings.iosFont && $(g.document.head).append("<link id='ios-default-font' rel='text/css' href='/css/ios-default-font.css'>"), t.Themes.hasCustomStyles() && t.Themes.settings.validCompiledCSS ? $(g.document.head).find("link[id=ionicstyle]").attr("href", n.getCSSURL(t.getProject().app_id, t.Themes.settings.version)) : $(g.document.head).find("link[id=ionicstyle]").attr("href", "/lib/ionic/release/css/ionic.css")
                });
                var y = function (e) {
                    var n, i, o, a, r = e.querySelectorAll("[data-componentid]");
                    for (console.log("Identifying", r.length, "components"), i = r.length, n = 0; i > n; n++) {
                        a = r[n];
                        var o = t.getById(a.getAttribute("data-componentid"));
                        if (a.dataset.tapDisabled = true, o) {
                            o.$rendered = a;
                            var l = g.angular.element;
                            o.replaceRendered(a, l), o.onRender(u, t.getDocument(), t)
                        } else"app1" !== a.getAttribute("data-componentid") && console.error("Couldn't identify component for", a.getAttribute("data-componentid"))
                    }
                    window.Designer.select(window.Designer.selectedComponent)
                }, w = function (n, i) {
                    o(function () {
                        var i = e.renderAsNode(t.getDocument(), t.getActivePageId(), n.document, u), o = function () {
                            var o;
                            o = n.document.body, o.innerHTML = "", u.element(n.document).injector().invoke(["$compile", "$rootScope", "$document", "$timeout", "$ionicViewService", "$state", function (n, o, r, l, s, d) {
                                d.$current.provided = e.renderChildTree(t.getActivePage()), d.$current.provided && d.$current.provided.setAttribute("hide-back-button", "true");
                                var c = n(i)(o);
                                r[0].body.appendChild(c[0]), t.getActivePage().get("hideHeader", false) ? r[0].$ionicNavBarDelegate.showBar(false) : r[0].$ionicNavBarDelegate.showBar(true), setTimeout(function () {
                                    a.$apply(function () {
                                        y(r[0].body);
                                        var e = r.find("ion-content");
                                        e.on("scroll", function (t) {
                                            f.prevScrollPosition = e.scrollTop(), f.$emit("contentScroll")
                                        }), e.scrollTop(f.prevScrollPosition || 0)
                                    })
                                }, 10)
                            }])
                        };
                        "complete" !== n.document.readyState ? u.element(n.document).ready(function () {
                            o()
                        }) : o()
                    })
                }, b = _.debounce(function () {
                    return g && u ? void w(g) : void setTimeout(function () {
                        b()
                    }, 50)
                }, 5), C = function (t) {
                    if (!g || !u)return void b();
                    if (t.canRedrawSingle === false)return void b();
                    var n = (g.angular.element, e.renderChildTree(t, null, true)), i = g.document.querySelector('[data-componentid="' + t.getId() + '"]');
                    $(i).replaceWith(n), t.setRendered(n)
                }, S = _.debounce(function (e) {
                    C(e)
                }, l), P = _.debounce(function (e) {
                    C(e)
                }, 1), m = d.find("iframe");
                m[0].contentWindow.injectCSS = function () {
                    r.$emit("newcss")
                }, m[0].contentWindow.onAngular = function (n) {
                    return u = n, m.ready(function (n) {
                        g = m[0].contentWindow, 1 == t.Device.settings.statusBar && (g.document.body.className += " header-hack"), r.$emit("iframe.ready", g), o(function () {
                            r.$emit("newcss")
                        }, 1), h = new i(g.document), u.element(g.document).injector().invoke(["$compile", "$rootScope", "$document", function (t, n, i) {
                            e.setFrameInjectables(t, n, g.document, u, g)
                        }])
                    }), t
                }
            }
        }
    }]), n.directive("livePreview", ["$rootScope", "$compile", "Designer", "Themes", "DocumentExporter", "StandardModal", function (e, t, n, i, o, a) {
        var r = function (i, o) {
            function a() {
                setTimeout(function () {
                    e.$apply(function () {
                        e.loadingIndicator = false
                    })
                }, 10), T.setAttribute("style", "display:block;"), x[0].setAttribute("style", "display:block;"), 1 == n.Device.settings.statusBar && (T.contentWindow.document.body.className += " header-hack")
            }

            o.empty(), e.loadingIndicator = true;
            var r, l = 28;
            r = "android" == n.Device.settings.os && 1 == n.Device.settings.statusBar ? (n.Device.settings.height + 20) * n.Device.settings.scaleVal : n.Device.settings.height * n.Device.settings.scaleVal;
            var s = n.Device.settings.width * n.Device.settings.scaleVal, d = document.getElementById("live-preview-table").offsetHeight, c = document.getElementById("live-preview-table").offsetWidth - 20, p = n.Device._calculateSkinMetrics(n.Device.skinDimensions[n.Device.settings.type]), u = 0, g = 0, h = "none";
            1 == n.Device.settings.skin && ("vertical" == n.Device.settings.orientation ? (u = p.widthMultiple * s, g = p.heightMultiple * r, h = 'url("' + n.Device.skinDimensions[n.Device.settings.type].urlVertical + '")') : "horizontal" == n.Device.settings.orientation && (u = p.heightMultiple * s, g = p.widthMultiple * r, h = 'url("' + n.Device.skinDimensions[n.Device.settings.type].urlHorizontal + '")'));
            var m = 0, f = 0;
            Math.max(r, g) < d ? (m = parseInt((d - Math.max(r, g)) / 2) + l / 2, f = -9999999) : (m = 30 + l, f = -1 * l);
            var v = p.verticalCenterOffsetPercentage * u / 2, y = 0;
            "horizontal" == n.Device.settings.orientation && (y -= v);
            var w = c, b = Math.abs(y) + (c - u) / 2 + "px 0px", C = document.createElement("div");
            C.style.height = r + "px", C.style.width = w + "px", C.style["margin-top"] = m + "px", C.style["margin-bottom"] = Math.max(0, m + f) + "px", C.style["margin-left"] = y + "px", C.style["background-image"] = h, 1 == n.Device.settings.skin && (C.style["background-repeat"] = "no-repeat", C.style["background-position"] = b, C.style["background-size"] = u + "px " + (g + "px"), C.style.height = g + "px", C.style["padding-top"] = "1px", d > g + 55 ? C.style["margin-top"] = parseInt((d - g) / 2) - 5 + l / 2 + "px" : (C.style["margin-top"] = 25 + l + "px", C.style["margin-bottom"] = "30px"));
            var S = document.createElement("div");
            if (S.className = "device", S.style["margin-bottom"] = "0px", S.style.width = n.Device.settings.width + "px", S.style.height = n.Device.settings.height + "px", S.style.transform = "scale(" + n.Device.settings.scaleVal + ")", S.style["transform-origin"] = "center top", 1 == n.Device.settings.skin) {
                var P, g, p = n.Device._calculateSkinMetrics(n.Device.skinDimensions[n.Device.settings.type]);
                "vertical" == n.Device.settings.orientation ? (u = p.widthMultiple * s, g = p.heightMultiple * r, P = p.pushDownPercentage * g) : "horizontal" == n.Device.settings.orientation && (u = p.heightMultiple * s, g = p.widthMultiple * r, P = p.pushLeftPercentage * g), S.style["margin-top"] = P + "px"
            }
            var x = t("<app-status></app-status>")(e), T = document.createElement("iframe");
            T.setAttribute("style", "display:none;"), x[0].setAttribute("style", "display:none;"), $(S).append(x), $(S).append(T);
            var D = document.createElement("div");
            D.className = "scroll-container", D.style["margin-right"] = "10px", D.style.height = document.getElementById("designer").offsetHeight + "px", $(D).append(C), $(C).append(S), o.append(D), i = i.replace("</body>", '<script> ionic && ionic.Platform && ionic.Platform.setPlatform("' + n.Device.settings.os + '") </script></body>'), i = i.replace(".config(function($stateProvider, $urlRouterProvider) {", ".config(function($ionicConfigProvider) {$ionicConfigProvider.scrolling.jsScrolling(false);}) .config(function($stateProvider, $urlRouterProvider) {"), T.contentWindow.document.open(), T.contentWindow.document.write(i), T.contentWindow.document.close(), T.onload = a;
            var k = T.contentDocument || T.contentWindow.document;
            "complete" == k.readyState && a()
        };
        return {
            restrict: "E", scope: {}, link: function (t, i, o) {
                if (n.featureCheck("!automagic-navigation")) {
                    var l = n.getActivePage(), s = "";
                    if (1 == l.get("abstract")) {
                        var d = l.get("pages", {pages: []});
                        if (!d)return console.error("No pages for abstract"), a.hideModal(), void a.show({
                            message: "In order to preview this page, it must have at least one viable child.<br /><br />For Side Menus that means at least one page must be linked inside the Side Menu.<br /><br />For Tabs that means the first Tab must have at least one Inner Page.",
                            title: "No Preview Available",
                            cancel: "OK",
                            callback: function (e) {
                                n.mode = "design"
                            }
                        });
                        0 == d.pages.length && (d = l.children[0].children[0].get("pages")), d ? s = n.getById(d.pages[0].id).getFullPageUrl() : (console.error("No pages for abstract"), a.hideModal(), a.show({
                            message: "In order to preview this page, it must have at least one viable child.<br /><br />For Side Menus that means at least one page must be linked inside the Side Menu.<br /><br />For Tabs that means the first Tab must have at least one Inner Page.",
                            title: "No Preview Available",
                            cancel: "OK",
                            callback: function (e) {
                                n.mode = "design"
                            }
                        }))
                    } else s = l.getFullPageUrl()
                } else {
                    var c = n.getActivePage(), s = "";
                    if (1 == c.get("abstract", false)) {
                        var p = c.get("previewPage", "");
                        if ("" == p)return console.error("No pages for abstract"), a.hideModal(), void a.show({
                            message: "In order to preview this page, it must have at least one viable child. For Side Menus that means at least one page must be linked inside the Side Menu. For Tabs that means at least one Tab must have its Default Page set.",
                            title: "No Preview Available",
                            cancel: "OK",
                            callback: function (e) {
                                n.mode = "design"
                            }
                        });
                        c = n.getById(p)
                    }
                    if ("" == c.get("parentState", "") || c.get("disableParenting", false))s = c.get("url"); else {
                        s = n.getById(c.get("parentState")).get("url");
                        var u = c.get("routeViews", "");
                        if ("" == u)s += c.get("url"); else {
                            var g = "";
                            if (u.length > 1)for (var h = 0; h < u.length; h++)0 == h && (g = "/" + u[0]), n.getById(u[h]).get("defaultPage") == c.id && (g = "/" + u[h]);
                            s = s + g + c.get("url")
                        }
                    }
                }
                var m = n.getProject(), f = JSON.parse(m.html).singleHTML;
                f = f.replace(/\$urlRouterProvider.otherwise\('(.*)'\)/g, "$urlRouterProvider.otherwise('" + s + "')"), r(f, i), i.on("$destroy", function () {
                    e.loadingIndicator = false
                })
            }
        }
    }]), n.directive("appOutline", ["$rootScope", "$compile", "DocumentIterator", "Designer", "PageTemplates", "$timeout", "StandardModal", "Features", function (e, t, n, i, o, a, r, l) {
        return {
            restrict: "E", scope: {app: "="}, templateUrl: "designer/app-outline.tmpl.html", link: function (o, a, s) {
                var d = a[0].querySelector(".content"), c = _.debounce(function (e) {
                    if ("undefined" != typeof e) {
                        var t, n = d.querySelector('[data-componentid="' + e.getId() + '"]');
                        n && (t = n.querySelector(".t"), t && (t.innerHTML = e.getTitle()))
                    }
                }, 100), p = _.debounce(function () {
                    var e = Date.now();
                    console.log("APP OUTLINE", e);
                    var a, r, s, c = document.createElement("ul");
                    c.className = "scroll-inner";
                    var p = 0;
                    s = c, n.traverse(i.getDocument().getPageContainer(), function (e, t, n) {
                        if (a = document.createElement("li"), a.setAttribute("data-componentid", e.getId()), liInnerHTML = '<a style="padding-left: ' + 16 * n + 'px" ng-click="select($event, \'' + e.getId() + '\')"><div class="page-icon page-icon-' + (e.get("outlineIcon") || e.type) + '"></div> <span class="t">' + e.getTitle() + "</span>",
                            e.info || e.get("info")) {
                            var s = e.info || e.get("info");
                            liInnerHTML = liInnerHTML + "<span ng-click=\"setStartingPage($event, '" + e.getId() + '\');" class="selected-icon info" data-toggle="tooltip" data-placement="bottom" title="" data-delay="400" data-original-title="' + s + '" data-nocontainer="body"></span>'
                        }
                        if ("page" != e.type || e.get("abstract") || (i.getExtra("startingPage", "") == e.getId() ? liInnerHTML = liInnerHTML + "<span ng-click=\"setStartingPage($event, '" + e.getId() + '\');" class="selected-icon pin on" data-toggle="tooltip" data-placement="bottom" title="" data-delay="400" data-original-title="This page is the default page of your app." data-nocontainer="body"></span>' : liInnerHTML = liInnerHTML + "<span ng-click=\"setStartingPage($event, '" + e.getId() + '\');" class="selected-icon pin" data-toggle="tooltip" data-placement="bottom" title="" data-delay="400" data-original-title="Pin this page as the default page in your app." data-nocontainer="body"></span>'), e.get("abstract") || e.canDelete === false || (liInnerHTML = liInnerHTML + '<span class="selected-icon duplicate" ng-click="clone($event, \'' + e.getId() + '\');" data-toggle="tooltip" data-placement="bottom" title="" data-delay="400" data-original-title="Duplicate" data-nocontainer="body"></span>'), e.canDelete === false || e.get("abstract") && 0 != l.check("automagic-navigation") || (liInnerHTML = liInnerHTML + '<span class="selected-icon trash" ng-click="delete($event, \'' + e.getId() + '\');" data-toggle="tooltip" data-placement="bottom" title="" data-delay="400" data-original-title="Delete" data-nocontainer="body"></span>'), liInnerHTML += "</a>", a.innerHTML = liInnerHTML, e.isPage && o.activePage && e.getId() == o.activePage.getId() && a.classList.add("expanded"), e == i.getSelectedComponent()) {
                            var u = d.querySelector(".selected");
                            u && u.classList.remove("selected"), a.classList.add("selected")
                        }
                        if (console.log(n + " " + new Array(n).join(" "), e.getId()), e.children.length && $(a).children().first().prepend('<span class="caret"></span>'), n > p)r = document.createElement("ul"), c.appendChild(r), c = r, p = n; else if (p > n) {
                            for (; p-- > n;) {
                                if (!c.parentNode) {
                                    r = document.createElement("ul"), c.appendChild(r), c = r;
                                    break
                                }
                                c = c.parentNode
                            }
                            p = n
                        }
                        c.appendChild(a)
                    });
                    var u = t(s)(o);
                    $(d).empty().append(u), console.log("APP OUTLINE END", Date.now() - e)
                }, 1);
                e.$on("outline.refresh", function () {
                    p()
                }), e.$on("component.childAdded", function () {
                    p()
                }), e.$on("component.childRemoved", function () {
                    p()
                }), e.$on("document.propertyChanged", function (e, t, n) {
                    c(n)
                }), e.$on("designer.selected", function (e, t) {
                    c(t);
                    var n = d.querySelector('[data-componentid="' + t.getId() + '"]'), i = d.querySelector(".selected");
                    if (i && i.classList.remove("selected"), n) {
                        n.classList.add("selected"), g();
                        for (var o = n; o && o.classList.contains("ng-scope") === false;)"ul" === o.nodeName.toLowerCase() ? (o = o.previousSibling, o && o.classList.add("expanded")) : "li" === o.nodeName.toLowerCase() && o.nextSibling && "ul" === o.nextSibling.nodeName.toLowerCase() && o.classList.add("expanded"), o && (o = o.parentNode);
                        h(n)
                    }
                });
                var u = function (e, t) {
                    var n = d.querySelector('[data-componentid="' + e + '"]');
                    n && n.classList.add("expanded"), t && (n = d.querySelector('[data-componentid="' + t + '"]'), n && n.classList.remove("expanded"))
                };
                o.selectPage = function (e) {
                    console.log("Selecing page", e), e && i.setActivePageId(e.getId(), true)
                }, o.$watch(function () {
                    return i.getActivePage()
                }, function (e, t) {
                    e && (o.activePage = e, o.activePageName = e.get("title"), u(e.getId(), t && t.getId() || null))
                }), o.$watch(function () {
                    return i.getPages()
                }, function (e, t) {
                    o.pages = e
                });
                var g = function () {
                    for (var e = d.querySelectorAll(".expanded"), t = 0; t < e.length; t++)e[t].classList.remove("expanded")
                }, h = function (e) {
                };
                o.setStartingPage = function (e, t) {
                    var n = a[0].querySelectorAll(".selected-icon.on");
                    n.length > 0 && $(n[0]).removeClass("on");
                    var o = $(e.target).closest(".selected-icon");
                    o.addClass("on"), o[0].setAttribute("data-original-title", "This page is the default page of your app."), i.setExtra("startingPage", t), i.AppGraph._save()
                }, o.clone = function (e, t) {
                    var n = i.getById(t), o = n.clone();
                    n.getParent().insertChild(o, n.getIndex() + 1), i.AppGraph._save(), o.isPage && i.setActivePageId(o.getId(), true), i.selectById(o.getId()), e.stopPropagation()
                }, o["delete"] = function (e, t) {
                    i.getById(t).isPage ? (r.hideModal(), r.show({
                        message: "Are you sure you want to delete this page?",
                        title: "Delete Page",
                        cancel: "Cancel",
                        warning: "Delete Page",
                        height: "240px",
                        callback: function (e) {
                            "warning" === e && i.removeSelectedComponent(true)
                        }
                    })) : i.removeSelectedComponent(true), e.stopPropagation()
                }, o.select = function (e, t) {
                    var n, r = i.getById(t);
                    if (r) {
                        r.isPage && o.selectPage(r), i.selectById(t);
                        for (var l = Array.prototype.slice.call(a[0].querySelectorAll(".selected")), s = 0; s < l.length; s++)$(l[s]).removeClass("selected");
                        n = $(e.target).closest("li"), n.addClass("selected")
                    }
                }, p()
            }
        }
    }]), n.directive("pageTemplates", ["$rootScope", "$compile", "DocumentIterator", "Designer", "PageTemplates", function (e, t, n, i, o) {
        return {
            restrict: "E",
            scope: {app: "="},
            templateUrl: "designer/page-templates.tmpl.html",
            link: function (e, t, n) {
                e.templates = o.all(), e.add = function (e) {
                    console.log("Adding type", e), i.addNewTemplatedPage(e)
                }
            }
        }
    }]), n.directive("componentProperties", ["$rootScope", "$timeout", "PropertyRenderer", "Designer", "StandardModal", function (e, t, n, i, o) {
        return {
            restrict: "E",
            scope: {component: "="},
            templateUrl: "designer/component-properties.tmpl.html",
            link: function (a, r, l) {
                var s, d, c = r[0].querySelector("#properties-form");
                r.on("click", ".category-toggle", function (e) {
                    $(this).closest(".category").toggleClass("expanded")
                }), e.$on("designer.deselected", function (e) {
                    $(c).empty()
                }), a.deleteComponent = function () {
                    o.hideModal(), o.show({
                        message: "Are you sure you want to delete this page?",
                        title: "Delete Page",
                        cancel: "Cancel",
                        warning: "Delete Page",
                        height: "240px",
                        callback: function (e) {
                            "warning" === e && i.removeSelectedComponent(true)
                        }
                    })
                }, a.selectComponent = function (e) {
                    i.select(e)
                }, e.$on("designer.selected", function (e, o) {
                    t(function () {
                        if (o && o != d) {
                            a.typeName = window.componentTypes[o.type].data.name, o.parent ? (a.typeNameParent = window.componentTypes[o.parent.type].data.name, "Nav" == a.typeNameParent && (a.typeNameParent = ""), o.parent.parent && (a.typeNameParentParent = window.componentTypes[o.parent.parent.type].data.name, ("Nav" == a.typeNameParentParent || "App" == a.typeNameParentParent) && (a.typeNameParentParent = ""), o.parent.parent.parent && (a.typeNameParentParentParent = window.componentTypes[o.parent.parent.parent.type].data.name, ("Nav" == a.typeNameParentParentParent || "App" == a.typeNameParentParentParent) && (a.typeNameParentParentParent = "")))) : a.typeNameParent = false, a.newProps = false, 1 == o.get("newProps", false) && (a.newProps = true), d = o;
                            var e = n.render(o, a);
                            s && s(), o.isPage && (i.featureCheck("!automagic-navigation") || 0 == o.get("abstract", false)) ? a.showDeleteButton = true : a.showDeleteButton = false, $(c).html(e)
                        }
                    })
                })
            }
        }
    }]), n.directive("toggle", ["$rootScope", function (e) {
        return {
            restrict: "E",
            template: '<span class="left-text" ng-bind="leftText"></span><div class="track"><div class="handle"></div></div><span class="right-text" ng-bind="rightText"></span>',
            require: "?ngModel",
            scope: {onValue: "@", offValue: "@", leftText: "@", rightText: "@"},
            link: function (e, t, n, i) {
                t.on("click", function (n) {
                    t.addClass("animate"), e.onValue ? i.$viewValue === e.onValue ? (t.removeClass("active"), i.$setViewValue(e.offValue)) : (t.addClass("active"), i.$setViewValue(e.onValue)) : i.$viewValue === true ? (t.removeClass("active"), i.$setViewValue(false)) : (t.addClass("active"), i.$setViewValue(true)), e.$apply()
                }), i.$render = function () {
                    e.onValue ? i.$viewValue === e.onValue ? t.addClass("active") : t.removeClass("active") : i.$viewValue === true ? t.addClass("active") : t.removeClass("active")
                }
            }
        }
    }]), n.factory("Coupon", ["Config", "$resource", function (e, t) {
        var n = e.get("creator_api_url");
        return t(n + "/stripe/coupon/:couponId", {couponId: "@coupon_id"}, {check: {method: "GET"}})
    }]), n.factory("Project", ["Config", "$resource", function (e, t) {
        var n = e.get("creator_api_url");
        return t(n + "/creator/:appId", {appId: "@app_id"}, {
            all: {method: "GET", url: n + "/creatorapps", isArray: true},
            clone: {method: "POST", url: n + "/creator/:appId/clone", params: {appId: "@app_id"}},
            move: {method: "POST", url: n + "/creator/:appId/move/:teamId", params: {appId: "@app_id"}},
            del: {method: "DELETE"}
        })
    }]), n.factory("SecurityProfile", ["Config", "$resource", function (e, t) {
        var n = e.get("creator_api_url");
        return t(n + "/creator/:appId/security/profiles", {appId: "@app_id"}, {
            all: {method: "GET", isArray: true},
            create: {method: "POST"}
        })
    }]).factory("SecurityCredential", ["Config", "$resource", function (e, t) {
        var n = e.get("creator_api_url");
        return t(n + "/creator/:appId/security/profiles/:profileTag/credentials", {appId: "@app_id"}, {
            create: {
                method: "POST",
                transformRequest: a,
                headers: {"Content-Type": void 0}
            }
        })
    }]);
    var a = function (e) {
        if (void 0 === e)return e;
        var t = new FormData;
        return angular.forEach(e, function (e, n) {
            e instanceof FileList ? 1 == e.length ? t.append(n, e[0]) : angular.forEach(e, function (e, i) {
                t.append(n + "_" + i, e)
            }) : t.append(n, e)
        }), t
    };
    n.factory("Team", ["Config", "$q", "$http", "Stats", function (e, t, n, i) {
        var o = e.get("creator_api_url");
        return {
            create: function (e, t) {
                return t = t.replace(/(?:\r\n|\r|\n)/g, ",").replace(/\s/g, ""), i.t("Team Created", {num_emails: t.split(",").length}), n.post(o + "/teams", {
                    name: e,
                    emails: t
                })
            }, removeMember: function (e, i, a) {
                var r = t.defer();
                return n.post(o + "/team/" + e.id + "/uninvite", {id: i, is_invitee: a}).then(function (e) {
                    r.resolve(e.data)
                }, function (e) {
                    r.reject(e)
                }), r.promise
            }, invite: function (e, i) {
                var a = t.defer();
                return n.post(o + "/team/" + e.id + "/invite", {emails: i}).then(function (e) {
                    a.resolve(e.data)
                }, function (e) {
                    a.reject(e)
                }), a.promise
            }, get: function (e) {
                var i = t.defer();
                return n.get(o + "/team/" + e).then(function (e) {
                    i.resolve(e.data)
                }, function (e) {
                    i.reject(e)
                }), i.promise
            }, all: function () {
                var e = t.defer();
                return n.get(o + "/teams").then(function (t) {
                    e.resolve(t.data.teams)
                }, function (t) {
                    e.reject(t)
                }), e.promise
            }
        }
    }]), n.factory("User", ["$state", "$rootScope", "$http", "$q", "Config", "Stats", "$timeout", function (e, t, n, i, o, a, r) {
        function l(e) {
            a.id(e.id), a.register({$first_name: e.name, $email: e.email, $created: e.date_joined})
        }

        var s = o.get("creator_api_url"), d = o.get("api_url");
        return t.isPayingCustomer = function () {
            return t.creatorUser && t.creatorUser.subscription && t.creatorUser.subscription.active ? true : false
        }, {
            isKnown: function () {
                return t.user
            }, getGravatar: function () {
                return t.user ? "https://www.gravatar.com/avatar/" + md5(t.user.email) + "?s=64&d=identicon" : ""
            }, getFirstName: function () {
                if (!t.user)return "";
                var e = t.user.name.split(/\s+/);
                return e[0]
            }, signup: function (e) {
                var t = i.defer();
                return e.source = "creator", n({
                    method: "POST",
                    url: d + "/signup",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    data: e,
                    transformRequest: function (e) {
                        var t = [];
                        for (var n in e)t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t.join("&")
                    }
                }).then(function (e) {
                    l(e.data), a.t("Signup", {user: e.data}), r(function () {
                        t.resolve(e.data)
                    }, 100)
                }, function (e) {
                    return t.reject(e)
                }), t.promise
            }, login: function (e) {
                var o = i.defer();
                return n({
                    method: "POST",
                    url: d + "/user/login",
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    data: e,
                    transformRequest: function (e) {
                        var t = [];
                        for (var n in e)t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t.join("&")
                    }
                }).then(function (e) {
                    l(e.data), a.t("Login", {user: e.data, source: e.data.source}), t.user = e.data, r(function () {
                        o.resolve(e.data)
                    }, 100)
                }, function (e) {
                    return o.reject(e)
                }), o.promise
            }, logout: function () {
                a.t("Logout", {user: t.user}), e.go("logout")
            }, get: function () {
                var e = i.defer();
                return t.user ? e.resolve(t.user) : n.get(d + "/user").then(function (n) {
                    t.user = n.data, a.intercomUpdate({source: t.user.source}), e.resolve(n.data)
                }, function (n) {
                    t.user = null, e.reject(n), t.$emit("auth.loggedOut", n)
                }), e.promise
            }, getCreatorUser: function (e) {
                var o = i.defer();
                return "undefined" == typeof e && (e = false), t.creatorUser && !e ? (l(t.creatorUser), o.resolve(t.creatorUser)) : n.get(s + "/user").then(function (e) {
                    t.creatorUser = e.data, l(t.creatorUser), a.intercomBoot(t.creatorUser), o.resolve(e.data)
                }, function (e) {
                    t.creatorUser = null, o.reject(e)
                }), o.promise
            }, getOrRedirectTo: function (t) {
                var n = e.current;
                console.log(e), this.get().then(function (t) {
                    console.log("Has user, old current state was", n), e.transitionTo(e.current, e.$current.params, {
                        reload: true,
                        inherit: true,
                        notify: true
                    })
                }, function (t) {
                    e.go("login", {loggedOut: true})
                })
            }, update: function (e) {
                t.user && angular.extend(t.user, e)
            }, save: function (e, o) {
                var a = i.defer();
                if (t.user) {
                    var r = angular.extend(angular.copy(t.user), e);
                    return o && (r.simpleFields = true), n.post(d + "/user", r).then(function (e) {
                        t.user = e.data, a.resolve(e.data)
                    }, function (e) {
                        a.reject(e), console.error("Cant update user", e, e.data)
                    }), a.promise
                }
            }
        }
    }]), SelectProperty = function (e, t) {
        return ["Designer", "$timeout", function (n, i) {
            return {
                restrict: "E",
                require: "?ngModel",
                template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><select class="form-control-borderless" ng-change="change()" ng-model="model"><option ng-show="hideEmpty" value="">{{emptyText}}</option><option ng-if="item.value!=\'\'" ng-repeat="item in items track by item.value" value="{{item.value}}" ng-selected="model==item.value">{{item.text}}</option></select>',
                link: function (o, a, r, l) {
                    angular.element(a[0].querySelector("select"));
                    o.emptyText = o.property.emptyText || e.getEmptyText() || "None", o.hideEmpty = !o.property.hideEmpty, i(function () {
                        o.model = l.$viewValue, o.change = function () {
                            var e, n = o.model;
                            e = n ? o.model : "", l.$setViewValue(e), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, e)
                        }, o.items = e.getItems(o, n, l)
                    }), a.on("$destroy", function () {
                        o.$destroy()
                    })
                }
            }
        }]
    }, n.directive("propertyList", SelectProperty({
        getEmptyText: function () {
            return "Default"
        }, getItems: function (e, t, n) {
            return e.property.options
        }
    })), Select2Property = function (e) {
        return ["$timeout", "$compile", function (t, n) {
            return {
                restrict: "E",
                require: "?ngModel",
                template: '<div class="form-group" ng-class="{\'full-width\': property.fullwidth}"><label for="">{{property.title}}<help-icon></help-icon></label><input class="form-control-borderless" /></div>',
                link: function (n, i, o, a) {
                    var r = $(i[0].querySelector("input"));
                    "undefined" == typeof e && (e = {});
                    var l = n.property.options || e.options, s = n.property.formatter || e.formatter, d = n.property.formatterSelection || e.formatterSelection, c = n.property.search || e.search, p = function (e) {
                        return e.text
                    };
                    "undefined" != typeof s && (p = s);
                    var u = p;
                    "undefined" != typeof d && (u = d);
                    var g = false;
                    "undefined" != typeof c && (g = c), a.$render = function () {
                        var e = {formatResult: p, formatSelection: u, data: l};
                        g || (e.minimumResultsForSearch = 1 / 0), $(r).select2(e).val(a.$viewValue).on("change", function () {
                            return null == $(this).val() ? void t(function () {
                                null != a.$viewValue && r.val(a.$viewValue).trigger("change")
                            }, 100) : void a.$setViewValue($(this).val())
                        }).trigger("change")
                    }, a.$viewChangeListeners.push(function () {
                        n.$eval(o.ngChange)
                    }), i.on("$destroy", function () {
                        n.$destroy(), $(r).select2("destroy")
                    })
                }
            }
        }]
    }, n.Select2Property = Select2Property, n.directive("propertyList2", Select2Property()), n.directive("propertyAlign", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><div class="alignment-icon-container"><div class="alignment-box left" ng-click="setv(\'left\');" ng-class="{\'on\': property.value==\'left\', \'text\': property.text == true}"><span class="alignment-icon"></span></div><div class="alignment-box inline" ng-click="setv(\'center\');" ng-class="{\'on\': property.value==\'center\', \'text\': property.text == true}"><span class="alignment-icon"></span></div><div class="alignment-box right" ng-click="setv(\'right\');" ng-class="{\'on\': property.value==\'right\', \'text\': property.text == true}"><span class="alignment-icon"></span></div><div class="alignment-box justify text" ng-if="property.text == true" ng-click="setv(\'justify\');" ng-class="{\'on\': property.value==\'justify\'}"><span class="alignment-icon"></span></div></</div>',
            link: function (e, t, n, i) {
                e.setv = function (e) {
                    i.$setViewValue(e)
                }, t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyBoolean", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><toggle ng-model="val"></toggle>',
            link: function (e, t, n, i) {
                e.val = e.property.value, e.$watch("val", function (t, n) {
                    i.$setViewValue(t), "undefined" != typeof e.property.onchange && t != n && e.property.onchange()
                });
                var o = angular.element(t[0].querySelector("input"));
                i.$render = function () {
                    i.$viewValue ? o.attr("checked", "checked") : o.removeAttr("checked")
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), o.on("click change", function () {
                    var t = o.is(":checked");
                    e.$apply(function () {
                        i.$setViewValue(t)
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyButton", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div style="padding:10px;"><button ng-click="property.exec($parent.component);" class="btn btn-block {{property.class}}">{{property.title}}</button></div>',
            link: function (e, t, n, i) {
                angular.element(t[0].querySelector("button"));
                t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyClass", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><div style="float:right;width:200px;"><div style="inline-block;width:200px;"><input name="class" style="width:100%;" class="form-control" placeholder="" ng-model="classNames" ng-change="updateVal()"></div></div></div>',
            link: function (e, t, n, i) {
                e.classNames = "", i.$render = function () {
                    "undefined" != typeof i.$viewValue ? e.classNames = i.$viewValue : e.classNames = ""
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), e.updateVal = function () {
                    i.$setViewValue(angular.copy(e.classNames))
                }, t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyThemeColor", n.Select2Property({
        options: [{
            id: "light",
            text: "Light",
            color: "light"
        }, {id: "stable", text: "Stable", color: "stable"}, {id: "dark", text: "Dark", color: "dark"}, {
            id: "positive",
            text: "Positive",
            color: "positive"
        }, {id: "balanced", text: "Balanced", color: "balanced"}, {
            id: "assertive",
            text: "Assertive",
            color: "assertive"
        }, {id: "calm", text: "Calm", color: "calm"}, {
            id: "energized",
            text: "Energized",
            color: "energized"
        }, {id: "royal", text: "Royal", color: "royal"}], formatter: function (e) {
            return '<div style="line-height:20px;"><span class="color-square ' + e.color + "-bg " + e.color + '-border space-right"></span> ' + e.text + "</div>"
        }, formatterSelection: function (e) {
            return '<div><span class="color-square ' + e.color + "-bg " + e.color + '-border space-right" style="margin-top:-3px;"></span> ' + e.text + "</div>"
        }
    })).directive("propertyThemeColorAllowNone", n.Select2Property({
        options: [{
            id: "none",
            text: "No Theme",
            color: ""
        }, {id: "light", text: "Light", color: "light"}, {id: "stable", text: "Stable", color: "stable"}, {
            id: "dark",
            text: "Dark",
            color: "dark"
        }, {id: "positive", text: "Positive", color: "positive"}, {
            id: "balanced",
            text: "Balanced",
            color: "balanced"
        }, {id: "assertive", text: "Assertive", color: "assertive"}, {
            id: "calm",
            text: "Calm",
            color: "calm"
        }, {id: "energized", text: "Energized", color: "energized"}, {id: "royal", text: "Royal", color: "royal"}],
        formatter: function (e) {
            return '<div style="line-height:20px;"><span class="color-square ' + e.color + "-bg " + e.color + '-border space-right"></span> ' + e.text + "</div>"
        },
        formatterSelection: function (e) {
            return '<div><span class="color-square ' + e.color + "-bg " + e.color + '-border space-right" style="margin-top:-3px;"></span> ' + e.text + "</div>"
        }
    })).directive("propertyColorPicker", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><color-picker ng-model="tempColor" color-picker-format="\'hex\'" color-picker-alpha="false" ng-model-options="{ debounce: 400 }"></color-picker>',
            link: function (e, t, n, i) {
                e.tempColor = "", e.ready = false, i.$render = function () {
                    e.ready = true, e.tempColor = i.$viewValue, e.$watch("tempColor", function () {
                        i.$setViewValue(e.tempColor)
                    })
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyDimension", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><input type="text" class="form-control" id="" placeholder="{{property.placeholder}}" value="{{property.value}}"></div>',
            link: function (e, t, n, i) {
                var o = angular.element(t[0].querySelector("input"));
                i.$render = function () {
                    o.val(i.$viewValue)
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), o.on("blur keyup change", function () {
                    var t = o.val();
                    e.$apply(function () {
                        i.$setViewValue(t)
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyEditor", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group auto"><label for="">{{property.title}}<help-icon></help-icon></label><div class="markdown-editor-container"><div class="editor" style="width: 263px; height: 250px;"></div></div></div>',
            link: function (e, t, n, i) {
                var o = ace.edit(t[0].querySelector(".editor"));
                o.setTheme("ace/theme/textmate"), o.getSession().setMode("ace/mode/" + e.property.language), o.getSession().setUseWrapMode(true), e.showGutter || o.renderer.setShowGutter(false), o.on("change", function (e) {
                    i.$setViewValue(o.getValue())
                }), i.$render = function () {
                    o.setValue(i.$viewValue)
                }, t.on("$destroy", function () {
                    e.$destroy(), o.destroy()
                })
            }
        }
    }]), n.directive("helpIcon", [function () {
        return {
            restrict: "E",
            template: '<a class="nav-icon icon-help" ng-if="property.help" style="margin:0px 0px 0px 5px;" data-toggle="tooltip" data-placement="right" title="" data-delay="400" data-original-title="{{property.help}}" data-nocontainer="body"></a>',
            link: function (e, t, n) {
                t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyHtml", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><div class="editor" style="width: 100%; height: 250px"></div></div>',
            link: function (e, t, n, i) {
                var o = ace.edit(t[0].querySelector(".editor"));
                o.setTheme("ace/theme/monokai"), o.getSession().setMode("ace/mode/html"), o.getSession().setUseWrapMode(true), o.on("change", function (e) {
                    i.$setViewValue(o.getValue())
                }), i.$render = function () {
                    o.setValue(i.$viewValue)
                }, t.on("$destroy", function () {
                    e.$destroy(), o.destroy()
                })
            }
        }
    }]), n.factory("IconSet", ["$q", "$http", "$rootScope", "$timeout", function (e, t, n, i) {
        var o = {};
        return {
            load: function (n) {
                var a = e.defer();
                return n in o ? i(function () {
                    a.resolve(o[n])
                }) : t.get("/tmpl/icons/" + n + ".json").then(function (e) {
                    o[n] = e.data, o[n].splice(0, 0, {name: "No Icon"}), a.resolve(o[n])
                }, function (e) {
                    a.reject(e)
                }), a.promise
            }
        }
    }]).directive("propertyIcon", ["IconSet", "$rootScope", "$timeout", function (e, t, n) {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group" ng-class="{\'full-width\': property.fullwidth}"><label for="">{{property.title}}<help-icon></help-icon></label><select class="form-control-borderless"></select></div>',
            link: function (i, o, a, r) {
                function l(e, t) {
                    var n = document.createElement("option");
                    n.value = e, n.innerHTML = t, s.append(n)
                }

                var s = $(o[0].querySelector("select")), d = function (e) {
                    return '<i class="' + e.id + ' icon-in-select"></i> ' + e.id
                }, c = _.debounce(function () {
                    $(s).select2({formatResult: d, formatSelection: d}).val(r.$viewValue).on("change", function () {
                        return null == $(this).val() ? void n(function () {
                            null != r.$viewValue && s.val(r.$viewValue).trigger("change")
                        }, 100) : void r.$setViewValue($(this).val())
                    }).trigger("change")
                }, 10);
                r.$render = function () {
                    s.val(r.$viewValue).trigger("change")
                }, r.$viewChangeListeners.push(function () {
                    i.$eval(a.ngChange)
                }), i.icons = [], e.load("ionicons").then(function (e) {
                    n(function () {
                        for (var t in e)l(e[t].name, e[t].name);
                        c()
                    })
                }, function (e) {
                    t.$emit("iconset.error", e)
                }), o.on("$destroy", function () {
                    i.$destroy(), $(s).select2("destroy")
                })
            }
        }
    }]), n.directive("propertyPages", ["Designer", function (e) {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">Inner Pages<help-icon></help-icon></label><div ng-repeat="innerpage in property.value.pages" style="padding-bottom:10px;position:relative;"><select class="form-control-borderless" ng-model="innerpage.id" ng-change="saveChanges()" style="width: 80%;display: inline-block;"><option value="">- Select a Page -</option><option ng-repeat="page in pageData" value="{{page.id}}" ng-selected="innerpage.id==page.id">{{page.title}}</option></select><button class="btn btn-danger" style="width: 18%;padding: 6px 0px 3px 0px;right: 0px;position: absolute;" ng-click="removePage($index)"><span class="ion-trash-b" style="font-size: 20px;line-height: 20px;"><span></button></div><button class="btn btn-block btn-primary" ng-click="addPage()">Assign Page</button></div>',
            link: function (t, n, i, o) {
                var a = e.getPages();
                t.pageData = [];
                for (var r = 0; r < a.length; r++)0 == a[r].get("disableParenting") && t.pageData.push({
                    id: a[r].id,
                    title: a[r].get("title")
                });
                o.$render = function () {
                    "object" != typeof o.$viewValue && o.$setViewValue({pages: []}), t.gotModel = true
                }, t.saveChanges = function () {
                    for (var n = [], i = 0; i < o.$viewValue.pages.length; i++) {
                        var r = o.$viewValue.pages[i].id, l = e.getById(r), s = l.get("parentView", "");
                        if (n.push(r), "" != s && s != t.$parent.component.id) {
                            var d = e.getById(s);
                            if ("undefined" != typeof d) {
                                for (var c = d.get("pages"), p = [], i = 0; i < c.pages.length; i++)c.pages[i].id != r && p.push(c.pages[i]);
                                d.set("pages", {pages: p})
                            }
                        }
                        l.set("parentState", t.$parent.component.getParentPage().id), l.set("parentView", t.$parent.component.id)
                    }
                    for (var i = 0; i < a.length; i++)a[i].get("parentView") == t.$parent.component.id && -1 == n.indexOf(a[i].id) && (a[i].set("parentState", ""), a[i].set("parentView", ""));
                    e.save()
                }, t.removePage = function (e) {
                    o.$viewValue.pages.splice(e, 1), t.saveChanges()
                }, t.addPage = function () {
                    o.$viewValue.pages.push({id: ""}), o.$setViewValue(o.$viewValue)
                }, n.on("$destroy", function () {
                    t.$destroy()
                })
            }
        }
    }]), n.directive("propertyInt", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><span class="int-unit" ng-show="property.unit" ng-click="focus()">{{property.unit}}</span><input type="number" class="form-control" id="" placeholder="{{property.placeholder}}" value="{{property.value}}" ng-class="{\'unit-button-fix\': property.unit}"></div>',
            link: function (e, t, n, i) {
                var o = angular.element(t[0].querySelector("input"));
                e.focus = function () {
                    o.focus()
                }, i.$render = function () {
                    o.val(i.$viewValue)
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), o.on("blur keyup change", function () {
                    var t = o.val();
                    e.$apply(function () {
                        i.$setViewValue(t)
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyMargin", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><div class="flex"><input type="text" class="form-control form-control-inline" id="" placeholder="{{property.placeholder}}" value="{{property.value.top}}"><input type="text" class="form-control form-control-inline" id="" placeholder="{{property.placeholder}}" value="{{property.value.right}}"><input type="text" class="form-control form-control-inline" id="" placeholder="{{property.placeholder}}" value="{{property.value.bottom}}"><input type="text" class="form-control form-control-inline" id="" placeholder="{{property.placeholder}}" value="{{property.value.left}}"></div></div>',
            link: function (e, t, n, i) {
                var o = t[0].querySelectorAll("input"), a = angular.element(o[0]), r = angular.element(o[1]), l = angular.element(o[2]), s = angular.element(o[3]);
                i.$render = function () {
                    a.val(i.$viewValue.top), r.val(i.$viewValue.right), l.val(i.$viewValue.bottom), s.val(i.$viewValue.left)
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), t.on("blur keyup change", "input", function () {
                    var t = {top: a.val(), right: r.val(), bottom: l.val(), left: s.val()};
                    e.$apply(function () {
                        i.$setViewValue(t)
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyMove", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group" style="height:65px;"><label for="" style="line-height:40px;">{{property.title}}<help-icon></help-icon></label><div style="float:right;"><button ng-click="property.left($parent.component);" class="btn btn-primary ion-arrow-left-a"></button> <button ng-click="property.right($parent.component);" class="btn btn-primary ion-arrow-right-a"></button></div></div>',
            link: function (e, t, n, i) {
                t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyRadius", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group full-number"><label for="">{{property.title}}<help-icon></help-icon></label><span class="int-unit" ng-show="property.unit" ng-click="focus()">{{property.unit}}</span><span class="radius-all" ng-click="updateR(\'all\');" ng-class="{\'on\': radiusSettings.active==\'all\'}"></span><span class="radius-topleft" ng-click="updateR(\'topleft\');" ng-class="{\'on\': radiusSettings.active==\'topleft\'}"></span><span class="radius-topright" ng-click="updateR(\'topright\');" ng-class="{\'on\': radiusSettings.active==\'topright\'}"></span><span class="radius-bottomright" ng-click="updateR(\'bottomright\');" ng-class="{\'on\': radiusSettings.active==\'bottomright\'}"></span><span class="radius-bottomleft" ng-click="updateR(\'bottomleft\');" ng-class="{\'on\': radiusSettings.active==\'bottomleft\'}"></span><input type="number" class="form-control" id="" placeholder="{{property.placeholder}}" value="{{property.value}}" ng-class="{\'unit-button-fix\': property.unit}"></div>',
            link: function (e, t, n, i) {
                function o() {
                    var t = a.val();
                    e.radiusSettings[e.radiusSettings.active + "_val"] = t, "all" == e.radiusSettings.active && "undefined" != typeof e.radiusSettings.all_val && "" !== e.radiusSettings.all_val && (e.radiusSettings.topleft_val = t, e.radiusSettings.topright_val = t, e.radiusSettings.bottomright_val = t, e.radiusSettings.bottomleft_val = t);
                    var n = {
                        all: e.radiusSettings.all,
                        all_val: e.radiusSettings.all_val,
                        topleft_val: e.radiusSettings.topleft_val,
                        topright_val: e.radiusSettings.topright_val,
                        bottomright_val: e.radiusSettings.bottomright_val,
                        bottomleft_val: e.radiusSettings.bottomleft_val
                    };
                    console.info("HERES MY RADIUS", n), i.$setViewValue(n)
                }

                var a = angular.element(t[0].querySelector("input"));
                e.focus = function () {
                    a.focus()
                }, e.radiusSettings = {
                    all: true,
                    all_val: void 0,
                    active: void 0,
                    topleft_val: void 0,
                    topright_val: void 0,
                    bottomright_val: void 0,
                    bottomleft_val: void 0
                };
                var r = ["topleft", "topright", "bottomright", "bottomleft"];
                i.$render = function () {
                    "undefined" == typeof i.$viewValue || "undefined" == typeof e.radiusSettings.all ? e.radiusSettings.active = "all" : (e.radiusSettings.all = i.$viewValue.all, e.radiusSettings.all_val = i.$viewValue.all_val, e.radiusSettings.topleft_val = i.$viewValue.topleft_val, e.radiusSettings.topright_val = i.$viewValue.topright_val, e.radiusSettings.bottomright_val = i.$viewValue.bottomright_val, e.radiusSettings.bottomleft_val = i.$viewValue.bottomleft_val, e.radiusSettings.all ? (e.radiusSettings.active = "all", a.val(i.$viewValue.all_val)) : (e.radiusSettings.active = "topleft", a.val(i.$viewValue.topleft_val)))
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), e.updateR = function (t) {
                    if (a.val(e.radiusSettings[t + "_val"]), "all" == t ? e.radiusSettings.all = true : e.radiusSettings.all = false, "all" == t && "all" !== e.radiusSettings.active) {
                        for (var n = true, i = e.radiusSettings.topleft_val, l = 1; l < r.length; l++)if (i != e.radiusSettings[r[l] + "_val"]) {
                            n = false;
                            break
                        }
                        n ? (e.radiusSettings.all_val = e.radiusSettings.topleft_val, a.val(e.radiusSettings.all_val)) : (e.radiusSettings.all_val = void 0, a.val(void 0))
                    }
                    e.radiusSettings.active = t, o()
                }, a.on("blur keyup change", function () {
                    e.$apply(function () {
                        o()
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.run(["Action", function (e) {
        e.register("modifyProperty", {
            perform: function (e) {
                e.set(e.propertyName, e.newPropertyValue)
            }, revert: function (e) {
                e.set(e.propertyName, e.oldPropertyValue)
            }
        })
    }]).factory("PropertyRenderer", ["$compile", "$rootScope", function (e, t) {
        var n = function (n, i) {
            var o, a, r, l, s, d = [], c = n.getSortedProperties(), u = {};
            for (i.propertyValueChanged = function (e, i, o) {
                t.$emit("document.propertyChanged", e, n)
            }, o = 0; o < c.length; o++)p = c[o], p.show !== false && (l = p.category ? p.category : "", u[l] || (u[l] = []), u[l].push(p));
            for (var g in u) {
                for (s = g ? $('<div class="category expanded"><h4 class="category-toggle"><span class="caret"></span> ' + g + '</h4><div class="content"></div></div>') : $('<div class="category expanded"><div class="content"></div></div>'), o = 0; o < u[g].length; o++) {
                    p = u[g][o], a = p.type || "string", r = i.$new(),
                        r.property = p, r.name = p.type || "string";
                    var h = true;
                    p.feature && (window.Designer.featureCheck(p.feature) || (h = false));
                    var m = "";
                    p.ngShow && (m = ' ng-show="ngShow(property.ngShow)"'), r.ngShow = function (e) {
                        return r.$parent.component ? e(r.$parent.component) : false
                    }, h && s.find(".content").append(e("<property-" + p.type + ' ng-model="property.value"' + m + ' ng-change="propertyValueChanged(property, newValue, oldValue)"></property-' + p.type + ">")(r))
                }
                d.push(s)
            }
            return d
        };
        return {
            render: function (e, t) {
                return n(e, t)
            }
        }
    }]);
    var r = function (e, t) {
        return ["Designer", "$timeout", function (n, i) {
            return {
                restrict: "E",
                require: "?ngModel",
                template: '<div class="form-group unfloat-inputs auto" ng-class="{\'full-width\': property.fullwidth}"><label for="">{{property.title}}<help-icon></help-icon></label><select class="form-control-borderless" ng-change="change()" ng-model="model" style="float:right;"><option value="">{{emptyText}}</option><option ng-if="item.value!=\'\'" ng-repeat="item in items track by item.value" value="{{item.value}}" ng-selected="model==item.value">{{item.text}}</option></select><input ng-change="inputChange(\'url\');" id="url-input" class="form-control" placeholder="http://othersite.com" ng-model="vals.url" style="margin-top:12px;"><input ng-change="inputChange(\'tel\');" type="tel" class="form-control" placeholder="5551234567" ng-model="vals.tel" style="margin-top:12px;"><input ng-change="inputChange(\'mailto\');" type="email" class="form-control" placeholder="someone@email.com" ng-model="vals.mailto" style="margin-top:12px;">',
                link: function (o, a, r, l) {
                    var s = (angular.element(a[0].querySelector("select")), {});
                    s.url = angular.element(a[0].querySelector("#url-input")), s.tel = angular.element(a[0].querySelector('input[type="tel"]')), s.mailto = angular.element(a[0].querySelector('input[type="email"]')), s.url.hide(), s.tel.hide(), s.mailto.hide(), o.emptyText = o.property.emptyText || e.getEmptyText() || "None", o.vals = {
                        url: "",
                        tel: "",
                        mailto: ""
                    }, l.$render = function () {
                        if (o.items = e.getItems(o, n, l, i), 0 == l.$viewValue.indexOf("tel"))o.model = "tel", o.vals.tel = l.$viewValue.replace("tel:", ""), s.tel.show(); else if (0 == l.$viewValue.indexOf("mailto"))o.model = "mailto", o.vals.mailto = l.$viewValue.replace("mailto:", ""), s.mailto.show(); else if ("" == l.$viewValue)o.model = l.$viewValue; else {
                            for (var a = false, d = 0; d < o.items.length; d++)if (o.items[d].value == l.$viewValue) {
                                a = true;
                                break
                            }
                            a ? o.model = l.$viewValue : (o.model = "url", o.vals.url = l.$viewValue, s.url.show())
                        }
                        o.change = function () {
                            var e, n = o.model;
                            e = n ? o.model : "", "url" != e && "tel" != e && "mailto" != e ? (s.url.hide(), s.tel.hide(), s.mailto.hide(), l.$setViewValue(e), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, e)) : (s.url.hide(), s.tel.hide(), s.mailto.hide(), s[e].show(), o.inputChange(e), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, e))
                        }, o.inputChange = function (e) {
                            var n = "";
                            switch (e) {
                                case"url":
                                    n = s.url.val();
                                    break;
                                case"tel":
                                    n = "tel:" + s.tel.val();
                                    break;
                                case"mailto":
                                    n = "mailto:" + s.mailto.val()
                            }
                            l.$setViewValue(n), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, n)
                        }
                    }, a.on("$destroy", function () {
                        o.$destroy()
                    })
                }
            }
        }]
    }, l = function (e, t) {
        return ["Designer", "$timeout", function (n, i) {
            return {
                restrict: "E",
                require: "?ngModel",
                template: '<div class="form-group unfloat-inputs auto" ng-class="{\'full-width\': property.fullwidth}"><label for="" style="display:inline-block;">{{property.title}}<help-icon></help-icon></label><div class="options-toggle-container options-25-percent"><div class="options-toggle-box left" ng-click="change(\'\')" ng-class="{\'on\': model != \'tel\' && model != \'mailto\' && model != \'url\'}"><div class="alignment-icon link-icon link-icon-page"></div></div><div class="options-toggle-box middle" ng-click="change(\'url\')" ng-class="{\'on\': model == \'url\'}"><div class="alignment-icon link-icon link-icon-url"></div></div><div class="options-toggle-box middle" ng-click="change(\'mailto\')" ng-class="{\'on\': model == \'mailto\'}"><div class="alignment-icon link-icon link-icon-mailto"></div></div><div class="options-toggle-box right" ng-click="change(\'tel\')" ng-class="{\'on\': model == \'tel\'}"><div class="alignment-icon link-icon link-icon-tel"></div></div></div><select class="form-control-borderless" ng-change="change()" ng-model="model" style="margin-top:12px;"><option value="">{{emptyText}}</option><option ng-if="item.value!=\'\'" ng-repeat="item in items track by item.value" value="{{item.value}}" ng-selected="model==item.value">{{item.text}}</option></select><input ng-change="inputChange(\'url\');" id="url-input" class="form-control" placeholder="http://othersite.com" ng-model="vals.url" style="margin-top:11px;"><input ng-change="inputChange(\'tel\');" type="tel" class="form-control" placeholder="5551234567" ng-model="vals.tel" style="margin-top:11px;"><input ng-change="inputChange(\'mailto\');" type="email" class="form-control" placeholder="someone@email.com" ng-model="vals.mailto" style="margin-top:11px;"><select class="form-control-borderless" ng-change="change()" ng-if="viewsNeeded" ng-model="vals.view" style="margin-top:12px;"><option ng-repeat="view in views" value="{{view.id}}" ng-selected="vals.view == view.id">Open in {{view.title}}</option></select>',
                link: function (o, a, r, l) {
                    var s, d = (angular.element(a[0].querySelector("select")), {});
                    d.url = angular.element(a[0].querySelector("#url-input")), d.tel = angular.element(a[0].querySelector('input[type="tel"]')), d.mailto = angular.element(a[0].querySelector('input[type="email"]')), d.route = angular.element(a[0].querySelector("select")), d.url.hide(), d.tel.hide(), d.mailto.hide(), o.emptyText = o.property.emptyText || e.getEmptyText() || "None", o.vals = {
                        url: "",
                        tel: "",
                        mailto: "",
                        view: ""
                    }, o.viewsNeeded = false, o.views = [], l.$render = function () {
                        if (s = o.$parent.component.get("newProps", false), s && d.route.hide(), o.items = e.getItems(o, n, l, i), 0 == l.$viewValue.indexOf("tel"))o.model = "tel", o.vals.tel = l.$viewValue.replace("tel:", ""), d.tel.show(); else if (0 == l.$viewValue.indexOf("mailto"))o.model = "mailto", o.vals.mailto = l.$viewValue.replace("mailto:", ""), d.mailto.show(); else if ("" == l.$viewValue)o.model = l.$viewValue, d.route.show(); else {
                            for (var t = false, a = 0; a < o.items.length; a++)if (o.items[a].value == l.$viewValue) {
                                t = true;
                                break
                            }
                            if (t) {
                                o.model = l.$viewValue, d.route.show();
                                var r = window.Designer.getById(o.model).get("routeViews", []), c = o.$parent.component.getParentPage().get("routeViews", []);
                                if (r.length > 1 && 0 == c.length) {
                                    o.viewsNeeded = true, o.views = [];
                                    for (var a = 0; a < r.length; a++) {
                                        var p = window.Designer.getById(r[a]);
                                        r[a] == o.$parent.component.get("linkView", "") && (o.vals.view = r[a]), o.views.push({
                                            id: r[a],
                                            title: p.get("title")
                                        })
                                    }
                                }
                            } else o.model = "url", o.vals.url = l.$viewValue, d.url.show()
                        }
                    }, o.change = function (e) {
                        "undefined" == typeof e ? e = o.model : o.model = e;
                        var n;
                        if (n = e ? o.model : "", "url" != n && "tel" != n && "mailto" != n) {
                            d.url.hide(), d.tel.hide(), d.mailto.hide(), d.route.show();
                            var i = window.Designer.getById(n).get("routeViews", []), a = o.$parent.component.getParentPage().get("routeViews", []);
                            if (i.length > 1 && 0 == a.length) {
                                if (!o.viewsNeeded) {
                                    var c = false;
                                    o.views = [];
                                    for (var p = 0; p < i.length; p++) {
                                        var u = window.Designer.getById(i[p]);
                                        u.get("defaultPage", "") == n && (o.vals.view = i[p], c = true), o.views.push({
                                            id: i[p],
                                            title: u.get("title")
                                        })
                                    }
                                    c || (o.vals.view = o.views[0].id), o.viewsNeeded = true
                                }
                            } else o.viewsNeeded = false, o.vals.view = "";
                            o.$parent.component.set("linkView", o.vals.view), l.$setViewValue(n), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, n)
                        } else d.url.hide(), d.tel.hide(), d.mailto.hide(), s && d.route.hide(), d[n].show(), o.inputChange(n), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, n)
                    }, o.inputChange = function (e) {
                        var n = "";
                        switch (e) {
                            case"url":
                                n = d.url.val();
                                break;
                            case"tel":
                                n = "tel:" + d.tel.val();
                                break;
                            case"mailto":
                                n = "mailto:" + d.mailto.val()
                        }
                        l.$setViewValue(n), o.$eval(r.ngChange), "undefined" != typeof t && t(o.$parent.component, n)
                    }, a.on("$destroy", function () {
                        o.$destroy()
                    })
                }
            }
        }]
    };
    n.directive("propertyRoute", l({
        getEmptyText: function () {
            return "Not linked"
        }, getItems: function (e, t, n, o) {
            var a = t.getPages(), r = [{value: "", text: "None"}];
            for (i = 0; i < a.length; i++)p = a[i], p.get("url") === n.$viewValue && !function (e) {
                o(function () {
                    $(select).val(e.get("url"))
                })
            }(p), 0 == p.get("abstract", false) && e.$parent.component.getParentPage().getId() != p.getId() && r.push({
                value: p.getId(),
                text: p.get("title") + " - " + p.get("url"),
                page: p,
                pageId: "(" + p.getId() + ")"
            });
            return 0 == e.$parent.component.get("newProps", false) && (r.push({
                value: "url",
                text: "External URL"
            }), r.push({value: "tel", text: "Phone Number"}), r.push({value: "mailto", text: "Email Address"})), r
        }
    }, function (e, t) {
        e.getParentPage().updateChildLinks(), window.Designer.AppGraph.addLink(e)
    })).directive("propertyDefaultpage", r({
        getEmptyText: function () {
            return "Not linked"
        }, getItems: function (e, t, n, o) {
            var a = t.getPages(), r = [{value: "", text: "None"}];
            for (i = 0; i < a.length; i++)p = a[i], p.get("url") === n.$viewValue && !function (e) {
                o(function () {
                    $(select).val(e.get("url"))
                })
            }(p), 0 == p.get("abstract", false) && r.push({
                value: p.getId(),
                text: p.get("title") + " - " + p.get("url"),
                page: p,
                pageId: "(" + p.getId() + ")"
            });
            return r
        }
    }, function (e, t) {
        e.getParentPage().updateChildLinks(), window.Designer.AppGraph.addLink(e)
    })), n.directive("propertySize", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group full-number" style="height:55px;"><label for="">{{property.title}}<help-icon></help-icon></label><div style="float:right;width:200px;"><div style="inline-block;width:85px;float:left;"><input name="width" style="width:85px;text-align:left;" class="form-control light-blue-select" placeholder="" ng-model="sizeSettings.width" ng-focus="select($event)" ng-keydown="keyDown($event)" ng-change="updateVal()"></div><div style="inline-block;width:30px;float:left;padding-left:9px;padding-top:8px;"><i class="icon ion-close" style="color:#a8aeb7;"></i></div><div style="inline-block;width:85px;float:left;"><input name="height" style="width:85px;text-align:left;" class="form-control light-blue-select" placeholder="" ng-model="sizeSettings.height" ng-focus="select($event)" ng-keydown="keyDown($event)" ng-change="updateVal()"></div><span style="position:absolute;top:32px;left:129px;"><label>Width</label></span><span style="position:absolute;top:32px;left:245px;"><label>Height</label></span></div></div><div style="margin-left:105px;margin-bottom:5px;margin-top:10px;" class="checkbox"><label style="color:#333;font-weight:400;font-size:14px;"><input type="checkbox" ng-model="sizeSettings.fullWidth" ng-change="checkFullWidth();updateVal()">Make full width</label></div>',
            link: function (e, t, n, i) {
                function o(e) {
                    return "38" == e.keyCode || "40" == e.keyCode ? (e.target.select(), e.preventDefault(), false) : void 0
                }

                e.sizeSettings = {};
                var a = angular.element(t[0].querySelector("input[name=width]")), r = angular.element(t[0].querySelector("input[name=height]"));
                e.checkFullWidth = function () {
                    1 == e.sizeSettings.fullWidth && (e.sizeSettings.width = "100%")
                }, i.$render = function () {
                    "undefined" != typeof i.$viewValue ? e.sizeSettings = {
                        width: String(i.$viewValue.width),
                        height: String(i.$viewValue.height),
                        fullWidth: Boolean(i.$viewValue.fullWidth)
                    } : e.sizeSettings = {width: "100px", height: "100px", fullWidth: false}
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), e.updateVal = function () {
                    "100%" !== e.sizeSettings.width && (e.sizeSettings.fullWidth = false), i.$setViewValue(angular.copy(e.sizeSettings))
                }, getIncrement = function (e, t) {
                    var n = e.replace(/[^\d]+$/, ""), i = e.replace(n, "");
                    return parseInt(n) + t + i
                }, e.keyDown = function (t) {
                    var n = null;
                    "38" == t.keyCode && (n = 1), "40" == t.keyCode && (n = -1), null !== n && 0 == t.currentTarget.value.replace(/[^\d]+$/, "").replace(/\d+/, "").replace(/^\-{1}$/, "").length && t.currentTarget.value.replace(/[^\d]+/, "").length > 0 && (t.currentTarget.value = getIncrement(t.currentTarget.value, n), e.sizeSettings.width = a.val(), e.sizeSettings.height = r.val(), e.updateVal())
                }, e.select = function (e) {
                    e.currentTarget.select()
                }, t[0].querySelector("input[name=width]").addEventListener("keydown", o), t[0].querySelector("input[name=height]").addEventListener("keydown", o), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyString", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group" ng-class="{\'full-width\': property.fullwidth}"><label for="">{{property.title}}<help-icon></help-icon></label><div ng-if="!stringValid" >You cannot include Angular templating code { { and } }.</div><input type="text" class="form-control" id="" placeholder="{{property.placeholder}}" value="{{property.value}}" pattern="^(?!(\\{\\{.+\\}\\})$).*$" title="This is invalid" /></div>',
            link: function (e, t, n, i) {
                var o = angular.element(t[0].querySelector('input[type="text"]'));
                i.$render = function () {
                    o.val(i.$viewValue)
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), e.stringValid = true, o.on("keyup", function () {
                    var t = o.val();
                    return -1 != t.indexOf("{{") && -1 != t.indexOf("}}") ? void(e.stringValid = false) : (e.stringValid = true, void e.$apply(function () {
                        e.property.onchange && e.property.onchange(), i.$setViewValue(t)
                    }))
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyTextlist", ["Designer", function (e) {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group" ng-class="{\'auto\': property.autoheight, \'full-width\': property.fullwidth}"><label for="">Options<help-icon></help-icon></label><div ng-repeat="option in property.value.options" style="padding-bottom:10px;position:relative;"><input type="text" ng-change="saveChanges()" class="form-control" id="" placeholder="Option" ng-model="option.value" style="width:220px;float:none;"><button class="btn btn-danger" style="width: 18%;padding: 6px 0px 3px 0px;right: 0px;position: absolute;top:0px;min-height:32px;" ng-click="removeOption($index)"><span class="ion-trash-b" style="font-size: 20px;line-height: 20px;"><span></button></div><button class="btn btn-block btn-primary" ng-click="addOption()">Add Option</button></div>',
            link: function (t, n, i, o) {
                function a() {
                    ("undefined" == typeof o.$viewValue.options.length || typeof o.$viewValue.options != typeof[]) && o.$setViewValue({options: []})
                }

                o.$render = function () {
                    a()
                }, o.$viewChangeListeners.push(function () {
                    t.$eval(i.ngChange)
                }), t.saveChanges = function () {
                    o.$setViewValue(o.$viewValue), t.$eval(i.ngChange), e.save()
                }, t.removeOption = function (e) {
                    o.$viewValue.options.splice(e, 1), t.saveChanges()
                }, t.addOption = function () {
                    a(), o.$viewValue.options.push({value: ""}), t.saveChanges()
                }, n.on("$destroy", function () {
                    t.$destroy()
                })
            }
        }
    }]), n.directive("propertySlashurl", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><input type="url" class="form-control" id="" placeholder="{{property.placeholder}}" value="{{property.value}}"></div>',
            link: function (e, t, n, i) {
                var o = angular.element(t[0].querySelector("input"));
                i.$render = function () {
                    o.val(i.$viewValue)
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), o.on("blur keyup change", function () {
                    var t = o.val();
                    e.$apply(function () {
                        0 !== t.indexOf("/") && (t = "/" + t, o.val(t)), i.$setViewValue(t), window.Designer.AppGraph._save()
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]).directive("propertyUrl", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><input type="url" class="form-control" id="" placeholder="{{property.placeholder}}" value="{{property.value}}"></div>',
            link: function (e, t, n, i) {
                var o = angular.element(t[0].querySelector("input"));
                i.$render = function () {
                    o.val(i.$viewValue)
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), o.on("blur keyup change", function () {
                    var t = o.val();
                    e.$apply(function () {
                        i.$setViewValue(t)
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]).directive("propertyUrlupload", [function () {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group" ng-class="{\'auto\': property.autoheight, \'full-width\': property.fullwidth}"><label for="" ng-if="property.title">{{property.title}}<help-icon></help-icon></label><button class="btn btn-primary btn-block" ng-click="uploadFile()" ng-if="!property.value">{{property.uploadText}}</button><div ng-if="property.value"><div class="form-control" style="float:none;"><div class="image-square" ng-style="{\'background-image\': \'url(\'+property.value+\')\'}"></div><span class="image-title">{{fileName}}</span><div class="image-remove ion-ios-trash-outline" ng-click="removeImage();"></div></div></div></div>',
            link: function (e, t, n, i) {
                var o = angular.element(t[0].querySelector("input"));
                e.fileName = "", i.$render = function () {
                    o.val(i.$viewValue), e.fileName = i.$viewValue.replace("https://s3.amazonaws.com/ionic-io-static/", ""), e.fileName = e.fileName.replace(/^.+_/, "")
                }, e.removeImage = function () {
                    i.$setViewValue(""), e.fileName = ""
                }, e.uploadFile = function () {
                    filepicker.setKey("AabgSObTT8yIzUSh8zMNAz"), filepicker.pickAndStore({
                        mimetype: "image/*",
                        customCss: "https://creator.ionic.io/css/filepicker.css",
                        location: "S3",
                        services: ["COMPUTER", "GOOGLE_DRIVE", "DROPBOX", "BOX", "URL", "WEBCAM", "IMAGE_SEARCH"]
                    }, {location: "S3"}, function (t) {
                        t.length > 0 && (i.$setViewValue("https://s3.amazonaws.com/ionic-io-static/" + t[0].key), e.fileName = i.$viewValue.replace("https://s3.amazonaws.com/ionic-io-static/", ""), e.fileName = e.fileName.replace(/^.+_/, ""))
                    })
                }, i.$viewChangeListeners.push(function () {
                    e.$eval(n.ngChange)
                }), o.on("blur keyup change", function () {
                    var t = o.val();
                    e.$apply(function () {
                        i.$setViewValue(t)
                    })
                }), t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.directive("propertyAndroidWebfont", n.Select2Property({
        options: [{
            id: "default",
            text: "Default (Android System Font)"
        }, {id: "muli", text: "Muli"}, {id: "lato", text: "Lato"}, {id: "notosans", text: "Noto Sans"}, {
            id: "raleway",
            text: "Raleway"
        }, {id: "opensans", text: "Open Sans"}, {id: "roboto", text: "Roboto"}, {
            id: "montserrat",
            text: "Montserrat"
        }, {id: "poppins", text: "Poppins"}, {id: "crimsontext", text: "Crimson Text"}, {id: "lora", text: "Lora"}],
        formatter: function (e) {
            return '<div style="line-height:20px;" class="select2-font-' + e.id + '">' + e.text + "</div>"
        },
        formatterSelection: function (e) {
            return '<div class="select2-font-' + e.id + '">' + e.text + "</div>"
        }
    })).directive("propertyIosWebfont", n.Select2Property({
        options: [{
            id: "default",
            text: "Default (iOS System Font)"
        }, {id: "muli", text: "Muli"}, {id: "lato", text: "Lato"}, {id: "notosans", text: "Noto Sans"}, {
            id: "raleway",
            text: "Raleway"
        }, {id: "opensans", text: "Open Sans"}, {id: "roboto", text: "Roboto"}, {
            id: "montserrat",
            text: "Montserrat"
        }, {id: "poppins", text: "Poppins"}, {id: "crimsontext", text: "Crimson Text"}, {id: "lora", text: "Lora"}],
        formatter: function (e) {
            return '<div style="line-height:20px;" class="select2-font-' + e.id + '">' + e.text + "</div>"
        },
        formatterSelection: function (e) {
            return '<div class="select2-font-' + e.id + '">' + e.text + "</div>"
        }
    })), n.directive("propertyFontWeight", ["Designer", "$timeout", function (e, t) {
        return {
            restrict: "E",
            require: "?ngModel",
            template: '<div class="form-group"><label for="">{{property.title}}<help-icon></help-icon></label><select class="form-control-borderless small" ng-change="change()" ng-model="model.weight"><option ng-if="item.value!=\'\'" ng-repeat="item in items track by item.value" value="{{item.value}}" ng-selected="model.weight==item.value">{{item.text}}</option></select><div class="options-toggle-container options-weight"><div class="options-toggle-box left" ng-class="{\'on\': !model.italic}" ng-click="change(false);"><div class="alignment-icon not-italic"></div></div><div class="options-toggle-box right" ng-class="{\'on\': model.italic}" ng-click="change(true);"><div class="alignment-icon italic"></div></div></div>',
            link: function (e, t, n, i) {
                angular.element(t[0].querySelector("select"));
                e.emptyText = e.property.emptyText || "Normal", e.hideEmpty = !e.property.hideEmpty, i.$render = function () {
                    null === i.$viewValue && (i.$setViewValue({
                        weight: e.property["default"] || "400",
                        italic: false
                    }), e.$eval(n.ngChange)), e.model = i.$viewValue, e.change = function (t) {
                        "undefined" == typeof t && (t = e.model.italic), e.model.italic = t;
                        var o, a = e.model.weight;
                        o = a ? e.model.weight : "", i.$setViewValue({
                            weight: o,
                            italic: t
                        }), e.$eval(n.ngChange), "undefined" != typeof changeFunc && changeFunc(e.$parent.component, o)
                    }, e.items = [{value: "lighter", text: "200 - Extra Light"}, {
                        value: "300",
                        text: "300 - Light"
                    }, {value: "400", text: "400 - Normal"}, {value: "500", text: "500 - Medium"}, {
                        value: "600",
                        text: "600 - Semi Bold"
                    }]
                }, t.on("$destroy", function () {
                    e.$destroy()
                })
            }
        }
    }]), n.run(["$templateCache", function (e) {
    }]).provider("Config", [function () {
        var e = {};
        return {
            set: function (t, n) {
                e[t] = n
            }, init: function (t) {
                e = t
            }, get: function (t) {
                return e[t]
            }, $get: function () {
                return {
                    set: function (t, n) {
                        return e[t] = n, n
                    }, get: function (t, n) {
                        return e[t] || n
                    }
                }
            }
        }
    }]), window.sessionId = t(), n.constant("SAVE_DELAY", 500).factory("$exceptionHandler", [function () {
        return function (e, t) {
            if (!window.compiling)throw e;
            var n = "", i = "";
            n += 'Exception: "' + e.toString() + '"\n', n += "Caused by: " + t + "\n";
            var o = e.message ? "Message: " + e.message + "\n" : "";
            i += o;
            var a = e.fileName ? "File Name: " + e.fileName + "\n" : "";
            i += a;
            var r = e.lineNumber ? "Line Number: " + e.lineNumber + "\n" : "";
            i += r;
            var l = e.stack ? "Stack Trace: " + e.stack + "\n" : "";
            i += l, i && (n += i), console.error(n), window.Stats.t("Error", {
                type: "save",
                message: n,
                ex_message: o,
                ex_fileName: a,
                ex_lineNumber: r,
                ex_stack: l
            }), window.StandardModal.hideModal(), window.StandardModal.show({
                message: n,
                template: "/tmpl/designer/error-saving-modal.tmpl.html",
                callback: function () {
                }
            }), window.compiling = false
        }
    }]).factory("Designer", ["$state", "$rootScope", "$timeout", "Document", "DocumentExporter", "PageTemplates", "DocumentRenderer", "ComponentFactory", "Stats", "Action", "Project", "SAVE_DELAY", "StandardModal", "Tutorials", "Features", function ($state, $rootScope, $timeout, Document, DocumentExporter, a, r, l, s, Action, c, p, u, g, h) {
        var m, f, v, y, w, b, C = false, S = false, P = {};
        window.StandardModal = u, window.Stats = s, Action.register("cut", {
            perform: function (e) {
                e.oldParent.removeChild(e.child, e.isQuiet)
            }, revert: function (e) {
                e.oldParent.insertChild(e.child, e.oldIndex)
            }
        }), Action.register("paste", {
            perform: function (e) {
                var t = e.child.clone();
                e.parent.appendChild(t), e.child = t, $timeout(function () {
                    T.select(t)
                }, 100)
            }, revert: function (e) {
                e.parent.removeChild(e.child)
            }
        });
        var x = null, Designer = {
            mode: "design",
            upgrade: function (t) {
                s.t(t), $state.go("dashboard.upgrade")
            },
            doneSaving: _.debounce(function () {
                $rootScope.$emit("document.doneSaving")
            }, 500),
            _inner_save: function (e) {
                try {
                    if ("undefined" == typeof e && (e = false), $rootScope.$emit("document.saving"), console.log("DESIGNER: SAVING", v), !v)return;
                    if (v.starting_page = "page10", "undefined" == typeof r.$frameDocument && !$rootScope.ignoreFrameDocument)return void this.saveDelayed();
                    $rootScope.ignoreFrameDocument = false;
                    var n = Date.now();
                    console.log("START COMPILE"), DocumentExporter.toSinglePageHTML(f).then(function (i) {
                        console.log("END SINGLE PAGE COMPILE", Date.now() - n), n = Date.now(), DocumentExporter.toMultiPageHTML(f).then(function (a) {
                            console.log("END MULTI PAGE COMPILE", Date.now() - n), a.singleHTML = i, v.document = DocumentExporter.toJson(f, y), v.html = JSON.stringify(a), v.lock_session = window.sessionId, v.lock_user = "" + $rootScope.user.id, v.force_save = e, v.$save().then(function (e) {
                                T.doneSaving()
                            }, function (e) {
                                var n = {
                                    multiple_windows: "It looks like you may have multiple windows open or you refreshed the page. Are you sure you would like to save these changes?",
                                    other_user: "Another user may be editing this app. Are you sure you would like to save these changes?"
                                }, i = n[e.data];
                                "undefined" != typeof i && (u.hideModal(), u.show({
                                    message: i,
                                    title: "Confirm Save",
                                    cancel: "Cancel",
                                    warning: "Save Project",
                                    callback: function (e) {
                                        "warning" === e && T.save(true)
                                    }
                                })), $rootScope.$emit("document.saveError")
                            })
                        }, function (e) {
                            $rootScope.$emit("document.saveError")
                        })
                    }, function (e) {
                        $rootScope.$emit("document.saveError")
                    })
                } catch (i) {
                    console.error("SAVING ERROR", i), u.hideModal(), u.show({
                        message: i.toString(),
                        template: "/tmpl/designer/error-saving-modal.tmpl.html",
                        callback: function () {
                        }
                    })
                }
            },
            save: function () {
                window.compiling || (null !== x && $timeout.cancel(x), x = $timeout(function () {
                    T._inner_save()
                }, p))
            },
            saveDelayed: function () {
                return T.save()
            },
            undo: function () {
                Action.undo()
            },
            redo: function () {
                Action.redo()
            },
            _pushAction: function (e) {
                Action.push(e)
            },
            editLock: function () {
                S = true
            },
            releaseEditLock: function () {
                S = false
            },
            isEditing: function () {
                return S
            },
            loadProject: function (n) {
                $rootScope.projectLoaded = false, s.t("Load Project", {id: n}), $state.go("app", {appId: n}, {reload: true})
            },
            setProject: function (e) {
                v = e, this.newDocument(v.app_id), f.fromJson(v.document), y = f.extraFromJson(v.document), y.fromTemplate && ("sidemenutabs" == y.fromTemplate ? (this.addNewTemplatedPage("ionic_tabs", false), this.addNewTemplatedPage("ionic_root_sidemenu", false)) : (this.addNewTemplatedPage(y.fromTemplate, false), "ionic_blank" == y.fromTemplate && this.setExtra("startingPage", "page1")), this.setExtra("fromTemplate", null)), f.getPageContainer() && f.getPageContainer().children.length > 0 && this.setActivePageId(f.getPage(0).getId());
                try {
                    JSON.parse(v.html)
                } catch (n) {
                }
                h.init(f.getProperty("v")), this.project_version = f.getProperty("v"), "undefined" != typeof y.device && (y.device.scaleTransition = "0s ease out", this.Device.settings = y.device), "undefined" != typeof y.themes && (this.Themes.settings = y.themes), $rootScope.$emit("colorswatch.update"), $rootScope.projectLoaded = true
            },
            getProject: function () {
                return v
            },
            newDocument: function (e) {
                f = new Document(e), P = {}, P[f.getRoot().getId()] = f.getRoot()
            },
            init: function () {
                C || ($rootScope.$on("document.modified", function (e) {
                    T.saveDelayed()
                }), $rootScope.$on("document.propertyChanged", function (e) {
                    T.saveDelayed()
                }), $rootScope.$on("component.childAdded", function (e, t, n) {
                    P[t.getId()] = t, l.markId(t.getId())
                }), $rootScope.$on("component.childRemove", function (e, t, n) {
                    P[t.getId()] = void 0, delete P[t.getId()]
                }), $rootScope.$on("component.childReplaced", function (e, t, n) {
                    P[n.getId()] = n
                }), $rootScope.$on("component.registerChild", function (e, t, n) {
                    P[t.getId()] = t
                }))
            },
            setMode: function (e) {
                this.mode = e, $rootScope.$emit("designer.modeChanged", e)
            },
            getMode: function () {
                return this.mode
            },
            "export": function () {
                DocumentExporter.toJson(f, y)
            },
            addPage: function () {
                return s.t("Add Page"), f.addPage()
            },
            getPageDomFromRoute: function (e) {
                if ("" != e) {
                    for (var t = this.getPages(), n = 0; n < t.length; n++)if (t[n].get("url") == e)return r.renderAsHtml(t[n]);
                    return console.error("No page found for route"), ""
                }
            },
            addNewTemplatedPage: function (e, t) {
                var n = this;
                ("undefined" == typeof t || t) && s.t("Add Page", {template: e});
                var i = a.get(e);
                console.log("Adding from template info", i), l.createFromTemplate(i.url).then(function (e) {
                    console.log("Created child", e), Action.exec({
                        action: "appendChild",
                        parent: f.getPageContainer(),
                        child: e
                    }), n.AppGraph._save(), n.setActivePageId(e.getId()), n.selectById(e.getId())
                }, function (e) {
                    console.error("Unable to create new child", e)
                })
            },
            removePage: function (e) {
                return f.removePage(e)
            },
            getPages: function () {
                return f.getPages()
            },
            getDocument: function (e) {
                return f || (f = new Document(e), P[f.getRoot().getId()] = f.getRoot()), f
            },
            onPageNavigation: function (e) {
                var t, n = this.getPages();
                for (t = 0; t < n.length; t++)if (n[t].get("url") === e)return console.log("Navigating to page", n[t]), this.setActivePageId(n[t].getId()), false
            },
            setActivePageToFirst: function (e) {
                var t = f.getPageContainer();
                if (!t)return null;
                var n = f.getPageContainer().children[0];
                n ? (m = n.getId(), this.select(n)) : this.addNewTemplatedPage("ionic_blank")
            },
            setActivePageId: function (e, t) {
                console.info("SETTING ACTIVE PAGE", e), m = e
            },
            getActivePageId: function () {
                return m
            },
            getActivePage: function () {
                return f && m ? f.getPageContainer().findChild(m) : void 0
            },
            appendTypeToActive: function (e) {
                var t, n = this.selectedComponent;
                n || (n = this.getActivePage()), n && (t = l.create(e), n.appendChild(t))
            },
            selectById: function (e) {
                console.log("Selecting", e);
                var t = P[e];
                t ? this.select(t) : console.error("No component found by id", e), $timeout(function () {
                })
            },
            select: function (e) {
                "undefined" != typeof e && null !== e && (this.selectedComponent = e, this.selectedComponent.onSelect(), $rootScope.$emit("designer.selected", e))
            },
            deselect: function () {
                var e = this.selectedComponent;
                this.selectedComponent = null, e && $rootScope.$emit("designer.deselected", e)
            },
            getSelectedComponent: function () {
                return this.selectedComponent
            },
            getById: function (e) {
                var t = P[e];
                if (t)return t
            },
            getComponentMap: function () {
                return P
            },
            removeSelectedComponent: function (e) {
                if (this.selectedComponent && (e || this.selectedComponent.canDelete !== false && this.selectedComponent.showSelectControls !== false)) {
                    this.removeComponent(this.selectedComponent);
                    for (var t = this.getPages(), n = 0; n < t.length; n++)if ("" != t[n].get("parentState", "")) {
                        var i = Designer.getById(t[n].get("parentState"));
                        console.info("MY PARENT", this.selectedComponent.id, i), ("undefined" == typeof i || null === i.parent || i.id == this.selectedComponent.id) && (t[n].set("parentState", ""), t[n].set("parentView", ""))
                    }
                    if (this.selectedComponent && "page" == this.selectedComponent.type) {
                        if ("" != this.selectedComponent.get("parentView", "")) {
                            for (var i = Designer.getById(this.selectedComponent.get("parentView", "")), o = i.get("pages"), a = [], n = 0; n < o.pages.length; n++)o.pages[n].id != this.selectedComponent.id && a.push(o.pages[n]);
                            i.set("pages", {pages: a})
                        }
                        this.deselect(), this.setActivePageToFirst(true)
                    } else this.deselect()
                }
            },
            removeComponent: function (e) {
                Action.exec({action: "removeChild", child: e, oldParent: e.parent, oldIndex: e.getIndex()})
            },
            duplicate: function () {
                if (this.selectedComponent && this.selectedComponent.canDuplicate !== false) {
                    var e = this.selectedComponent.clone(), t = this.selectedComponent.getIndex();
                    Action.exec({action: "insertChild", parent: this.selectedComponent.parent, child: e, index: t + 1});
                    var i = this;
                    $timeout(function () {
                        i.select(e)
                    })
                }
            },
            copy: function () {
                this.selectedComponent && this.selectedComponent.canDuplicate !== false && (b = null, w = this.selectedComponent)
            },
            cut: function () {
                var e = this;
                if (this.selectedComponent && this.selectedComponent.canDuplicate !== false) {
                    w = null, b = this.selectedComponent;
                    var t = b.parent;
                    Action.exec({action: "cut", child: b, oldParent: b.parent, oldIndex: b.getIndex()}), $timeout(function () {
                        e.select(t)
                    }, 100)
                }
            },
            paste: function () {
                var e = this.selectedComponent, t = w || b;
                if (e && t)do {
                    if (e.acceptsChild(t))return void Action.exec({action: "paste", parent: e, child: t});
                    e = e.parent
                } while (e)
            },
            setExtra: function (e, n) {
                y[e] = n, $rootScope.$emit("document.modified")
            },
            getExtra: function (e, t) {
                return "undefined" == typeof y[e] ? t : y[e]
            },
            featureCheck: function (e) {
                return h.check(e)
            },
            openTutorial: function (e) {
                g.show(e)
            },
            Themes: {
                settings: {
                    custom_scss_text: "",
                    custom_scss_variables: {},
                    headerBackgroundTheme: "stable",
                    sideMenuHeaderBackgroundTheme: "stable",
                    linkTheme: "positive",
                    pageBackgroundColor: "#FFFFFF",
                    textColor: "#333333",
                    version: "1",
                    validCompiledCSS: false,
                    usingCustomStyles: false,
                    iosFont: "default",
                    androidFont: "default",
                    fontList: [],
                    scssCursorPosition: {row: 0, column: 0},
                    section: "theme"
                },
                defaultSettings: {
                    custom_scss_text: "",
                    custom_scss_variables: {},
                    headerBackgroundTheme: "stable",
                    sideMenuHeaderBackgroundTheme: "stable",
                    linkTheme: "positive",
                    pageBackgroundColor: "#FFFFFF",
                    textColor: "#333333",
                    version: "1",
                    validCompiledCSS: false,
                    usingCustomStyles: false,
                    iosFont: "default",
                    androidFont: "default",
                    fontList: [],
                    scssCursorPosition: {row: 0, column: 0},
                    section: "theme"
                },
                fontFamily: {
                    roboto: "Roboto, sans-serif",
                    muli: "Muli, sans-serif",
                    lato: "Lato, sans-serif",
                    notosans: "'Noto Sans', sans-serif",
                    raleway: "Raleway, sans-serif",
                    opensans: "'Open Sans', sans-serif",
                    lora: "Lora, serif",
                    crimsontext: "'Crimson Text', serif",
                    poppins: "'Poppins', sans-serif",
                    montserrat: "Montserrat, sans-serif"
                },
                updateCursorPosition: function (e) {
                    T.Themes.settings.scssCursorPosition = e, T.Themes._save()
                },
                rememberSection: function (e) {
                    T.Themes.settings.section = e, T.Themes._save()
                },
                _setDefaultsIfNotExists: function () {
                    Object.keys(T.Themes.defaultSettings).forEach(function (e) {
                        e in T.Themes.settings || (T.Themes.settings[e] = T.Themes.defaultSettings[e])
                    })
                },
                extraCSS: function () {
                    var e = "";
                    return T.Themes.settings.pageBackgroundColor && "#FFFFFF" != T.Themes.settings.pageBackgroundColor && (e += "ion-view,.pane,.view{background-color:" + T.Themes.settings.pageBackgroundColor + ";}"), T.Themes.settings.textColor && "#333333" != T.Themes.settings.textColor && (e += "body{color:" + T.Themes.settings.textColor + ";}"), T.Themes.settings.iosFont && "default" != T.Themes.settings.iosFont && (e += "body.platform-ios{font-family:" + T.Themes.fontFamily[T.Themes.settings.iosFont] + ";}", e += ".ionic-body.platform-ios{font-family:" + T.Themes.fontFamily[T.Themes.settings.iosFont] + ";}"), T.Themes.settings.androidFont && "default" != T.Themes.settings.androidFont && (e += "body.platform-android{font-family:" + T.Themes.fontFamily[T.Themes.settings.androidFont] + ";}", e += ".ionic-body.platform-android{font-family:" + T.Themes.fontFamily[T.Themes.settings.androidFont] + ";}"), (T.Themes.settings.androidFont && "default" != T.Themes.settings.androidFont || T.Themes.settings.iosFont && "default" != T.Themes.settings.iosFont) && (e += "h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6,.tab-item,input,button,select,textarea {font-family:inherit;}"), e
                },
                removeComments: function (e) {
                    return e = e.replace(/\n\s*\/\/[^\n]*\n/g, ""), e = e.replace(/\/\*[^(?!\/\*)]*\*\//g, "")
                },
                updateSCSSText: function (e) {
                    T.Themes.settings.custom_scss_text = e,
                        T.Themes._save()
                },
                updateSCSSVariable: function (e, t) {
                    null == t || void 0 == t ? delete T.Themes.settings.custom_scss_variables[e] : T.Themes.settings.custom_scss_variables[e] = t, T.Themes._save()
                },
                updateSetting: function (e, t) {
                    T.Themes.settings[e] = t, T.Themes._save()
                },
                hasCustomStyles: function () {
                    var e = T.Themes.settings.custom_scss_text && T.Themes.settings.custom_scss_text.trim().length > 0, t = T.Themes.settings.custom_scss_variables && Object.keys(T.Themes.settings.custom_scss_variables).length > 0, n = T.Themes.settings.pageBackgroundColor && "#FFFFFF" != T.Themes.settings.pageBackgroundColor || T.Themes.settings.textColor && "#333333" != T.Themes.settings.textColor, i = T.Themes.settings.iosFont && "default" != T.Themes.settings.iosFont || T.Themes.settings.androidFont && "default" != T.Themes.settings.androidFont;
                    return e || t || n || i
                },
                variableConflicts: function (e) {
                    var t = {};
                    for (var n in e) {
                        var i = e[n], o = new RegExp("\\$" + i.replace("$", "") + "\\:([^;]+);"), a = T.Themes.removeComments(T.Themes.settings.custom_scss_text).match(o);
                        a && (t[i] = a[1].replace("!default", "").replace("!important", "").trim())
                    }
                    return t
                },
                generateFontList: function () {
                    var e = [];
                    "default" != T.Themes.settings.iosFont && e.push(T.Themes.settings.iosFont), "default" != T.Themes.settings.androidFont && -1 === e.indexOf(T.Themes.settings.androidFont) && e.push(T.Themes.settings.androidFont);
                    for (var t in T.Themes.fontFamily)T.Themes.settings.custom_scss_text.toLowerCase().indexOf(t) >= 0 && -1 === e.indexOf(t) && e.push(t);
                    T.Themes.settings.fontList = e
                },
                colorSwatchUpdate: $rootScope.$on("colorswatch.update", function (e) {
                    var t = ["light", "stable", "dark", "positive", "balanced", "assertive", "calm", "energized", "royal"], n = {};
                    for (index in t) {
                        var i = t[index];
                        "$" + i in T.Themes.settings.custom_scss_variables && (n[i] = T.Themes.settings.custom_scss_variables["$" + i]);
                        var o = new RegExp("\\$" + i + "\\:([^;]+);"), a = T.Themes.removeComments(T.Themes.settings.custom_scss_text).match(o);
                        a && (n[i] = a[1].replace("!default", "").replace("!important", "").trim())
                    }
                    var r = "";
                    for (cr in n)r += ".color-square." + cr + "-bg { background-color:" + n[cr] + " !important; border-color:" + tinycolor(n[cr]).darken(10).toString() + " !important; }";
                    $("#swatchCSS").remove(), $("head").append('<style id="swatchCSS">' + r + "</style>")
                }),
                _save: function () {
                    T.Themes._setDefaultsIfNotExists(), T.Themes.settings.version = String(parseInt(T.Themes.settings.version || "1") + 1), T.Themes.generateFontList(), T.Themes.settings.usingCustomStyles = T.Themes.hasCustomStyles(), T.setExtra("themes", T.Themes.settings)
                }
            },
            Device: {
                settings: {
                    type: "iphone",
                    os: "ios",
                    zoom: "1",
                    scaleVal: 1,
                    orientation: "vertical",
                    height: 568,
                    width: 320,
                    statusBar: true,
                    skin: true,
                    scaleTransition: "0s ease-out"
                },
                deviceTypeOrder: ["iphone", "ipad", "android", "androidtablet"],
                deviceTypes: {
                    iphone: {label: "iPhone", os: "ios", height: 568, width: 320},
                    ipad: {label: "iPad", os: "ios", height: 1024, width: 768},
                    android: {label: "Android Phone", os: "android", height: 526, width: 320},
                    androidtablet: {label: "Android Tablet", os: "android", height: 1024, width: 768}
                },
                zoomLevels: {
                    1: {label: "100%", scaleVal: 1},
                    2: {label: "90%", scaleVal: .9},
                    3: {label: "75%", scaleVal: .75},
                    4: {label: "50%", scaleVal: .5}
                },
                setScaleTransition: function (e) {
                    1 == e ? T.Device.settings.scaleTransition = "0.25s ease-out" : T.Device.settings.scaleTransition = "0s ease-out"
                },
                _updateDimensions: function () {
                    "vertical" == T.Device.settings.orientation ? (T.Device.settings.height = T.Device.deviceTypes[T.Device.settings.type].height, T.Device.settings.width = T.Device.deviceTypes[T.Device.settings.type].width) : "horizontal" == T.Device.settings.orientation && (T.Device.settings.height = T.Device.deviceTypes[T.Device.settings.type].width, T.Device.settings.width = T.Device.deviceTypes[T.Device.settings.type].height), "android" == T.Device.settings.os && 1 == T.Device.settings.statusBar && (T.Device.settings.height -= 20)
                },
                skinDimensions: {
                    iphone: {
                        urlVertical: "/img/iphone-skin.png",
                        urlHorizontal: "/img/iphone-skin-horizontal.png",
                        width: 780,
                        height: 1540,
                        viewportWidth: 644,
                        viewportHeight: 1143,
                        viewportVerticalStart: 171,
                        verticalCenterOffset: 50
                    },
                    android: {
                        urlVertical: "/img/android-skin.png",
                        urlHorizontal: "/img/android-skin-horizontal.png",
                        width: 826,
                        height: 1600,
                        viewportWidth: 718,
                        viewportHeight: 1180,
                        viewportVerticalStart: 128,
                        verticalCenterOffset: 160
                    },
                    ipad: {
                        urlVertical: "/img/ipad-skin.png",
                        urlHorizontal: "/img/ipad-skin-horizontal.png",
                        width: 1740,
                        height: 2400,
                        viewportWidth: 1524,
                        viewportHeight: 2032,
                        viewportVerticalStart: 175,
                        verticalCenterOffset: 15
                    },
                    androidtablet: {
                        urlVertical: "/img/android-tablet-skin.png",
                        urlHorizontal: "/img/android-tablet-skin-horizontal.png",
                        width: 1716,
                        height: 2540,
                        viewportWidth: 1524,
                        viewportHeight: 2032,
                        viewportVerticalStart: 250,
                        verticalCenterOffset: 0
                    }
                },
                _calculateSkinMetrics: function (e) {
                    return {
                        pushDownPercentage: e.viewportVerticalStart / e.height,
                        pushLeftPercentage: (e.width - e.viewportWidth) / 2 / e.width,
                        widthMultiple: e.width / e.viewportWidth,
                        heightMultiple: e.height / e.viewportHeight,
                        verticalCenterOffsetPercentage: e.verticalCenterOffset / e.height
                    }
                },
                _testStyle: function () {
                    var e;
                    e = "android" == T.Device.settings.os && 1 == T.Device.settings.statusBar ? (T.Device.settings.height + 20) * T.Device.settings.scaleVal : T.Device.settings.height * T.Device.settings.scaleVal;
                    var t = T.Device.settings.width * T.Device.settings.scaleVal, n = document.getElementById("app-wrap"), i = n.offsetHeight, o = n.offsetWidth, a = T.Device._calculateSkinMetrics(T.Device.skinDimensions[T.Device.settings.type]), r = 0, l = 0, s = "none";
                    1 == T.Device.settings.skin && ("vertical" == T.Device.settings.orientation ? (r = a.widthMultiple * t, l = a.heightMultiple * e, s = 'url("' + T.Device.skinDimensions[T.Device.settings.type].urlVertical + '")') : "horizontal" == T.Device.settings.orientation && (r = a.heightMultiple * t, l = a.widthMultiple * e, s = 'url("' + T.Device.skinDimensions[T.Device.settings.type].urlHorizontal + '")'));
                    var d = 0;
                    d = Math.max(e + 75, l + 75) < i ? parseInt((i - Math.max(e, l)) / 2) : 30;
                    var c = 0, p = o, u = T.Device.settings.scaleTransition;
                    if (1 == T.Device.settings.skin) {
                        var g = "50% 0px";
                        r > o ? 1 == T.Device.settings.scaleVal || r > T.Device.settings.width ? p = r + 60 : (p = T.Device.settings.width - (T.Device.settings.width - (r + 60)) / 2, c = 0 - (T.Device.settings.width - (r + 60)) / 2, g = Math.abs(c) + 30 + "px 0px") : T.Device.settings.width > o && (p = T.Device.settings.width - (T.Device.settings.width - o) / 2, c = 0 - (T.Device.settings.width - o) / 2, g = Math.abs(c) + (o - r) / 2 + "px 0px")
                    } else t > o ? 1 == T.Device.settings.scaleVal ? p = t + 60 : (p = t + (T.Device.settings.width - t) / 2 + 30, c = 0 - (T.Device.settings.width - t) / 2 + 30) : T.Device.settings.width > o && (c += -1 * (T.Device.settings.width - t) / 2 + (o - t) / 2, p += Math.abs(c));
                    var h = {
                        height: e + "px",
                        width: p + "px",
                        overflow: "hidden",
                        transition: u,
                        "margin-top": d - 5 + "px",
                        "margin-bottom": d + "px",
                        "margin-left": c + "px",
                        "background-image": s
                    };
                    return 1 == T.Device.settings.skin && (h["background-repeat"] = "no-repeat", h["background-position"] = g, h["background-size"] = r + "px " + (l + "px"), h.height = l, i > l + 55 ? (h["margin-top"] = parseInt((i - l) / 2) - 5 + "px", h["margin-bottom"] = parseInt((i - l) / 2) + "px") : (h["margin-top"] = "25px", h["margin-bottom"] = "30px")), h
                },
                _appFrameStyle: function () {
                    var e;
                    e = "android" == T.Device.settings.os && 1 == T.Device.settings.statusBar ? (T.Device.settings.height + 20) * T.Device.settings.scaleVal : T.Device.settings.height * T.Device.settings.scaleVal;
                    var t = T.Device.settings.width * T.Device.settings.scaleVal, n = document.getElementById("app-wrap"), i = (n.offsetHeight, n.offsetWidth), o = T.Device.settings.scaleTransition, a = {
                        height: T.Device.settings.height + "px",
                        width: T.Device.settings.width + "px",
                        transform: "scale3d(" + T.Device.settings.scaleVal + "," + T.Device.settings.scaleVal + ",1)",
                        transition: o,
                        "transform-origin": "center top"
                    };
                    if (1 == T.Device.settings.skin) {
                        var r, l, s, d = T.Device._calculateSkinMetrics(T.Device.skinDimensions[T.Device.settings.type]);
                        if (s = 0, "vertical" == T.Device.settings.orientation ? (s = d.widthMultiple * t, l = d.heightMultiple * e, r = d.pushDownPercentage * l) : "horizontal" == T.Device.settings.orientation && (s = d.heightMultiple * t, l = d.widthMultiple * e, r = d.pushLeftPercentage * l), Math.max(T.Device.settings.skinWidth, t) > i, a["margin-top"] = r + "px", "horizontal" == T.Device.settings.orientation) {
                            var c = d.verticalCenterOffsetPercentage * s;
                            a["margin-left"] = 0 - c + "px"
                        }
                    }
                    return a
                },
                setDevice: function (e) {
                    T.Device.settings.os == T.Device.deviceTypes[e].os ? T.Device.setScaleTransition(true) : T.Device.setScaleTransition(false), T.Device.settings.type = e, T.Device.settings.os = T.Device.deviceTypes[e].os, T.Device._updateDimensions(), T.Device._save(), $rootScope.$emit("designer.devicechange")
                },
                setZoom: function (e) {
                    var t = document.getElementById("app-wrap"), n = t.offsetWidth;
                    T.Device.settings.width * T.Device.settings.scaleVal > n ? T.Device.setScaleTransition(false) : T.Device.settings.width * T.Device.zoomLevels[e].scaleVal > n ? T.Device.setScaleTransition(false) : T.Device.setScaleTransition(true), T.Device.settings.zoom = e, T.Device.settings.scaleVal = T.Device.zoomLevels[e].scaleVal, T.Device._updateDimensions(), T.Device._save()
                },
                toggleOrientation: function () {
                    T.Device.setScaleTransition(true), T.Device.settings.orientation = "vertical" == T.Device.settings.orientation ? "horizontal" : "vertical", T.Device._updateDimensions(), T.Device._save(), $rootScope.$emit("designer.orientationchange")
                },
                toggleStatusBar: function () {
                    T.Device.settings.statusBar = !T.Device.settings.statusBar, T.Device._updateDimensions(), T.Device._save(), $rootScope.$emit("designer.statusbartoggle", T.Device.settings.statusBar)
                },
                toggleSkin: function () {
                    T.Device.setScaleTransition(false), T.Device.settings.skin = !T.Device.settings.skin, T.Device._save()
                },
                _save: function () {
                    T.setExtra("device", T.Device.settings)
                }
            },
            AppGraph: {
                _defaultData: {entries: {}, linkers: {}}, getLastUpdated: function () {
                    var e = T.AppGraph._load();
                    return "undefined" == typeof e.last_updated ? "none" : e.last_updated
                }, _save: function (e) {
                    T.featureCheck("automagic-navigation") && ("undefined" == typeof e && (e = T.AppGraph._load()), e.last_updated = Date.now(), T.setExtra("appgraph", e))
                }, _load: function () {
                    return T.getExtra("appgraph", angular.copy(T.AppGraph._defaultData))
                }, _ensureEntry: function (e, t) {
                    "undefined" == typeof t.entries[e] && (t.entries[e] = {from: {}, to: {}})
                }, _getID: function (e) {
                    return "string" == typeof e ? e : e.id
                }, addLink: function (e, t, n) {
                    if (T.featureCheck("automagic-navigation")) {
                        var i = T.AppGraph._load();
                        if ("undefined" == typeof t && "undefined" == typeof n && (n = e, e = n.getParentPage(), t = n.get("link", ""), def = n.get("defaultPage", ""), !T.getById(t))) {
                            if (!T.getById(def))return void T.AppGraph.removeLink(n);
                            t = def
                        }
                        var o = T.AppGraph._getID(e), a = T.AppGraph._getID(t), r = T.AppGraph._getID(n);
                        T.AppGraph._ensureEntry(o, i), T.AppGraph._ensureEntry(a, i), T.AppGraph.removeLink(r, i);
                        var l = {from: o, to: a, linker: r};
                        i.entries[o].to[a + "-" + r] = l, i.entries[a].from[o + "-" + r] = l, i.linkers[r] = {
                            from: o,
                            to: a
                        }, T.AppGraph._save(i)
                    }
                }, removeLink: function (e, t) {
                    if (T.featureCheck("automagic-navigation")) {
                        "undefined" == typeof t && (t = T.AppGraph._load());
                        var n = T.AppGraph._getID(e);
                        if (t.linkers[n]) {
                            var i = t.linkers[n].from, o = t.linkers[n].to;
                            delete t.entries[i].to[o + "-" + n], delete t.entries[o].from[i + "-" + n], delete t.linkers[n], T.AppGraph._save(t)
                        }
                    }
                }, removePage: function (e) {
                    if (T.featureCheck("automagic-navigation")) {
                        var t = T.AppGraph._load(), n = T.AppGraph._getID(e);
                        if ("undefined" != typeof t.entries[n])for (var i in t.entries[n].from) {
                            var o = t.entries[n].from[i].linker, a = T.getById(o);
                            T.AppGraph.removeLink(a, t), a.set("link", "")
                        }
                        T.AppGraph._save(t)
                    }
                }
            }
        };
        return window.Designer = T, T
    }]), n.factory("DragHandler", ["$rootScope", "ComponentTypes", function (e, t) {
        var n, i, o = new Image;
        o.height = 50, o.width = 90;
        var a = t.getSortedInstances();
        for (var r in a)for (var l = a[r], s = 0; s < l.length; s++) {
            var d = new Image;
            d.src = "/img/component-drag-" + l[s].type + ".png"
        }
        var c = function (e) {
            n = $(e.target).closest("li"), n.data("componentType") && (o.src = "/img/component-drag-" + n.data("componentType") + ".png")
        }, p = function (t) {
            var n = $(t.target).closest("li");
            t.dataTransfer.setDragImage && t.target.dataset.componentType && t.dataTransfer.setDragImage(o, 90, 50), t.dataTransfer.effectAllowed = "copy", t.dataTransfer.dropEffect = "copy", t.dataTransfer.setData("text/plain", n.data("componentType")), i = {type: n.data("componentType")}, e.$emit("drag.start", t)
        }, u = function (t) {
            e.$emit("drag.end", t)
        };
        return {
            setElement: function (e) {
                n = e[0], n.addEventListener("mousedown", c, false), n.addEventListener("touchstart", c, false), n.addEventListener("dragstart", p, false), n.addEventListener("dragend", u, false)
            }, getActiveDrag: function () {
                return i
            }
        }
    }]), n.factory("FrameCoords", ["DOM", function (e) {
        return {
            getPoint: function (e, t, n) {
                return [t, n]
            }
        }
    }]).factory("DropHandler", ["Designer", "DocumentRenderer", "DragHandler", "FrameCoords", "Config", "DOM", "Action", "$rootScope", "$timeout", "$interval", "Stats", function (e, t, n, i, o, a, r, l, s, d, c) {
        return function (p) {
            var u, g, h, m, f, v, y, w, b, C, S, P, x, T, D, k, I, _, E, M, A, j, L, V = false, R = false, N = function (e, t) {
                E = true, M = [t.pageX, t.pageY], A = e, e.startResize(t)
            }, U = function (t) {
                if (E && M && A) {
                    var n = (t.pageX - M[0], t.pageY - M[1]);
                    A.canResizeY && !A.canResizeX && A.resize(0, n), ie(A.getId()), e.save()
                }
            }, F = function (e) {
                A && A.commitResize()
            }, B = function () {
                f && f.parentNode && f.parentNode.removeChild(f), v && v.parentNode && v.parentNode && v.parentNode.removeChild(v), v = null
            }, O = function (t) {
                var n;
                if (!t && b && V) {
                    n = b.getRendered();
                    var n = b.getRendered();
                    n.classList.remove("ic-dragging"), P && (n.style.width = P.width, n.style.height = P.height, n.style.zIndex = P.zIndex), n.style.webkitTransform = n.style.transform = ""
                } else t || B();
                e.getSelectedComponent() && oe(e.getSelectedComponent().getId()), b = null, dragStartPoint = null, C = null, S = null, v = null, h = null, V = false
            }, H = function (e) {
                var t;
                if (!e)return null;
                do e.getAttribute && (t = e.getAttribute("data-componentid")), e = e.parentNode; while (!t && e);
                return t
            }, q = function (t, n) {
                var i = e.getSelectedComponent(), o = e.getById(H(t));
                return o ? i && o.isChildOf(i) ? i : o : void 0
            }, z = function (t, n, i) {
                var o = H(t);
                if (!o)return console.error("No such component found for the given node."), null;
                var a = e.getById(o);
                if (!a)return console.error("No such component found for the given node."), null;
                for (; a;) {
                    if (a.acceptsChild(n) && (!i || a.getRendered() !== i))return a;
                    a = a.parent
                }
            }, W = function (e) {
                return u.querySelector('[data-componentid="' + e + '"]')
            }, G = function (n) {
                var i, o = e.getDocument(), a = o.createComponent(n, true, true, true);
                return i = t.renderChildTree(a, null, true), i.classList.add("ic-placeholder-component"), i
            }, X = function () {
                x && (x.classList.remove("ic-select-remove"), $(x).detach())
            }, Y = function (t) {
                var n = $('<div class="ic-select-box"><div><div class="control-container"><a class="select-duplicate" href="#"></a><a class="select-remove" href="#"></a></div></div></div>');
                return t.canResizeY && !t.canResizeX && $(n.children()[0]).append('<div class="ic-drag-y"></div>'), n.on("mousedown", ".ic-drag-y, .ic-drag-x, .ic-drag-xy", function (e) {
                    return N(t, e), false
                }), n.on("mousemove", function (e) {
                    e.target.classList.contains("select-remove") ? n.addClass("ic-select-remove") : n.removeClass("ic-select-remove"), e.target.classList.contains("select-duplicate") ? n.addClass("ic-select-duplicate") : n.removeClass("ic-select-duplicate")
                }), n.on("mouseleave mouseout", function () {
                    n.removeClass("ic-select-remove"), n.removeClass("ic-select-duplicate")
                }), n.find(".select-remove").on("click", function (t) {
                    e.removeSelectedComponent(), X()
                }), n.find(".select-duplicate").on("click", function (t) {
                    e.duplicate()
                }), n[0]
            }, J = function (e, t, n, i) {
                f && f.parentNode && f.parentNode.removeChild(f), f && y === t || (f = G(t), y = t);
                var o = e.$rendered, r = e.getRenderedChildren(), l = o.querySelector(".ic-over");
                l && l.classList.remove("ic-over"), o !== f && (e.$rendered.classList.add("ic-over"), m = a.getIndexAtPoint(r, n, i), 0 > m ? e.getRenderedTarget().appendChild(f) : e.getRenderedTarget().insertBefore(f, r[m]))
            }, K = function () {
                f && f.parentNode && f.parentNode.removeChild(f)
            }, Z = function (e, t, n, i) {
                v || (v = $(t.$rendered).clone(true)[0], v.classList.add("ic-placeholder-component"));
                var o = e.$rendered, r = e.getRenderedChildren(), l = o.querySelector(".ic-over");
                l && l.classList.remove("ic-over"), o !== v && (e.$rendered.classList.add("ic-over"), $(v).detach(), m = a.getIndexAtPoint(r, n, i), 0 > m ? e.getRenderedTarget().appendChild(v) : e.getRenderedTarget().insertBefore(v, r[m]))
            }, Q = function (t, n) {
                var i = e.getDocument();
                if (!t)return void console.error("No active container to drop into");
                var o = i.createComponent(n, true);
                c.t("Added Component", {type: n}), 0 > m ? r.exec({
                    action: "appendChild",
                    parent: t,
                    child: o
                }) : r.exec({
                    action: "insertChild",
                    parent: t,
                    child: o,
                    index: m
                }), l.$emit("component.dropped", o), setTimeout(function () {
                    oe(o.getId())
                }, 250), o.commitChildren()
            }, ee = function () {
                var e = $('<div class="ic-hover-box"></div></div>');
                return e[0]
            }, te = function () {
                I = null, _ = null, T && T.parentNode && (T.classList.remove("active"), T.parentNode.removeChild(T))
            }, ne = function (e, t) {
                var n = e;
                "undefined" != typeof t.icElement && (n = t.icElement(e));
                var i = n.getBoundingClientRect();
                T || (T = ee()), e !== D && (T.parentNode ? (T.parentNode.removeChild(T), e.ownerDocument.body.appendChild(T)) : e.ownerDocument.body.appendChild(T), T.classList.remove("active"), D = e), s.cancel(k), k = s(function () {
                    T.classList.add("active")
                }, 10), T.style.width = i.width + "px", T.style.height = i.height + "px", T.style.webkitTransform = T.style.transform = "translate3d(" + i.left + "px, " + i.top + "px, 0)"
            }, ie = function (t) {
                s(function () {
                    var n = e.getById(t), i = W(t);
                    if (i) {
                        var o = u.querySelector(".ic-selected");
                        o && o.classList.remove("ic-selected"), i.classList.add("ic-selected");
                        var a = i;
                        "undefined" != typeof n.icElement && (a = n.icElement(i));
                        var r = a.getBoundingClientRect();
                        x && x.parentNode && x.parentNode.removeChild(x), x = Y(n), i.ownerDocument.body.appendChild(x), n.canDelete && n.showSelectControls ? x.classList.add("ic-select-box-can-delete") : x.classList.remove("ic-select-box-can-delete"), x.style.width = r.width + "px", x.style.height = r.height + "px", x.style.webkitTransform = x.style.transform = "translate3d(" + r.left + "px, " + r.top + "px, 0)"
                    }
                }, 10)
            }, oe = function (t) {
                if (t && !j) {
                    var n = e.getById(t);
                    n && n.canSelect && (e.select(n), ie(t))
                }
            }, ae = function () {
                X()
            }, re = function (e, t) {
                var n, i;
                b = t, i = t.getRendered(), i && (n = i.getBoundingClientRect(), C = [n.left - e.pageX, n.top - e.pageY], dragStartPoint = [e.pageX, e.pageY])
            }, le = function (e) {
                if (b) {
                    V = true, te(), ae();
                    var t = b.getRendered(), n = t.getBoundingClientRect();
                    point = [e.pageX + C[0], e.pageY + C[1]], Z(b.parent, b, point[0], point[1]);
                    var i = e.target.ownerDocument, o = $(t).detach();
                    o.appendTo(i.body), t.classList.add("ic-dragging"), P = {
                        width: t.style.width,
                        height: t.style.height,
                        zIndex: t.style.zIndex
                    }, t.style.width = n.width + "px", t.style.height = n.height + "px", t.style.zIndex = 10, t.style.webkitTransform = t.style.transform = "translate3d(" + point[0] + "px, " + point[1] + "px, 0)"
                }
            }, se = function (e) {
                if (b) {
                    var t = b.getRendered();
                    S || (S = [e.pageX, e.pageY]);
                    var n = [e.pageX + C[0], e.pageY + C[1]], i = e.pageX - dragStartPoint[0], r = e.pageY - dragStartPoint[1], l = Math.sqrt(i * i + r * r);
                    if (!w && l > o.get("drag_min_distance", 7))le(e); else if (!w)return;
                    w = true, n = [e.pageX + C[0], e.pageY + C[1]], t.style.webkitTransform = t.style.transform = "translate3d(" + n[0] + "px, " + n[1] + "px, 0) scale(0.95)";
                    var s = a.getNodeAtPoint(e.target.ownerDocument, e.pageX, e.pageY);
                    h = z(s, b.type, t), h && Z(h, b, n[0], n[1]), S = [e.pageX, e.pageY]
                }
            }, de = function (e) {
                return E && F(e), E = false, w = false, b ? h && V ? (r.exec({
                    action: "moveChild",
                    oldParent: b.parent,
                    oldIndex: b.getIndex(),
                    newParent: h,
                    newIndex: m,
                    child: b
                }), void O(true)) : (V && ($(b.rendered).remove(), l.$emit("component.redraw", b.parent)), void O()) : void O()
            }, ce = function (e) {
                return e.target.classList.contains("ic-placeholder-component") ? true : (e.preventDefault(), false)
            }, pe = function (e) {
                var t;
                if (e.preventDefault(), !e.target.classList.contains("ic-placeholder-component")) {
                    var o = n.getActiveDrag();
                    if (o)return g = i.getPoint(e.target.ownerDocument, e.pageX, e.pageY), t = a.getNodeAtPoint(e.target.ownerDocument, g[0], g[1]), h = z(t, o.type), h ? (e.dataTransfer.effectAllowed = "copy", e.dataTransfer.dropEffect = "copy", J(h, o.type, g[0], g[1])) : (e.dataTransfer.effectAllowed = "none", e.dataTransfer.dropEffect = "none", K()), true
                }
            }, ue = function (e) {
                return true
            }, ge = function (e) {
                if (e.stopPropagation(), !h)return void B();
                var t = e.dataTransfer.getData("text/plain");
                return Q(h, t), R = true, e.preventDefault(), false
            }, he = function (e) {
            }, me = function (e) {
                if (!E && !j && 3 != e.which) {
                    var t = q(e.target, true);
                    return t && !t.disableDragging && re(e, t), e.preventDefault(), false
                }
            }, fe = function (e) {
                F(e), de(e)
            }, ve = function (n) {
                if (j && 0 === n.detail)return injectSpace(n), void n.preventDefault();
                if (j) {
                    for (var i = n.target; null != i;) {
                        if (i == L.$rendered)return true;
                        i = i.parentNode
                    }
                    endEditing()
                }
                var o = H(n.target);
                return null == o && null == n.target.parentNode && (o = H(t.$frameDocument.elementFromPoint(n.pageX, n.pageY))), o ? (e.getById(o).onClick(), oe(o), n.preventDefault(), false) : void 0
            }, ye = function (t) {
                var n = t.target;
                if (!j) {
                    if (E)return void U(t);
                    if (b)return se(t), void t.preventDefault();
                    var i = H(n), o = e.getSelectedComponent(), a = o && o.getId() || null;
                    if (i && i !== a) {
                        var r = e.getById(i), l = W(i);
                        l || te(), r.canSelect && (I = l, _ = r, ne(l, r))
                    } else te()
                }
            }, we = function (e) {
                te(), D = null
            };
            u = p, l.$on("drag.start", function (t, n) {
                e.deselect(), X(), te()
            }), l.$on("drag.end", function (e, t) {
                s(function () {
                    R || B(), R = false
                })
            }), l.$on("designer.devicechange", function () {
                te();
                var t = e.getSelectedComponent();
                if (t) {
                    var n = e.getSelectedComponent().getId();
                    d(function () {
                        oe(n)
                    }, 10, 30)
                }
            }), l.$on("designer.orientationchange", function () {
                te();
                var t = e.getSelectedComponent();
                if (t) {
                    var n = e.getSelectedComponent().getId();
                    d(function () {
                        oe(n)
                    }, 10, 30)
                }
            }), l.$on("designer.statusbartoggle", function () {
                te();
                var t = e.getSelectedComponent();
                if (t) {
                    var n = e.getSelectedComponent().getId();
                    d(function () {
                        oe(n)
                    }, 10, 30)
                }
            }), l.$on("contentScroll", function (t, n) {
                I && ne(I, _);
                var i = e.getSelectedComponent();
                i && oe(e.getSelectedComponent().getId())
            }), l.$on("designer.selected", function (e, t) {
                ie(t.getId())
            }), l.$on("designer.deselected", function (e, t) {
                ae()
            }), l.$on("document.propertyChanged", function (t, n, i) {
                s(function () {
                    "undefined" != typeof i && i == e.getSelectedComponent() && ie(i.getId())
                })
            });
            var be = {
                enable: function () {
                    $(u).on("scroll", function (e) {
                    }, false), u.addEventListener("dragenter", ce, false), u.addEventListener("dragover", pe, false), u.addEventListener("dragleave", ue, false), u.addEventListener("drop", ge, false), u.addEventListener("mousedown", me, false), u.addEventListener("mouseup", fe, false), u.addEventListener("mousemove", ye, false), u.addEventListener("mouseleave", we, false), u.addEventListener("contextmenu", he, false), u.addEventListener("click", ve, false)
                }, destroy: function () {
                    this.disable()
                }, disable: function () {
                    u.removeEventListener("dragenter", ce), u.removeEventListener("dragover", pe), u.removeEventListener("dragleave", ue), u.removeEventListener("drop", ge), u.removeEventListener("mousedown", me), u.removeEventListener("mouseup", fe), u.removeEventListener("mousemove", ye), u.removeEventListener("mouseleave", we), u.removeEventListener("contextmenu", he), u.removeEventListener("click", ve)
                }
            };
            return be.enable(), be
        }
    }]), n.directive("filesModel", function () {
        return {
            controller: ["$parse", "$element", "$attrs", "$scope", function (e, t, n, i) {
                var o = e(n.filesModel);
                t.on("change", function () {
                    o.assign(i, this.files), i.$apply()
                })
            }]
        }
    }).factory("Exporter", ["$state", "$rootScope", "$compile", "$http", "$document", "Document", "DocumentExporter", "Designer", "Config", "Stats", "SecurityProfile", "SecurityCredential", "PlansModal", "ComponentFactory", "DocumentRenderer", "Share", "IconSplashModal", function (e, t, n, o, a, r, l, s, d, c, u, g, h, m, f, v, y) {
        var w, b, C = "/tmpl/designer/export-modal.tmpl.html", S = function (r) {
            function l() {
                var e = s.getExtra("startingPage"), t = s.getById(e);
                if ("undefined" == typeof t || "undefined" == typeof t.getParent() || "undefined" != typeof t.getParent() && null == t.getParent()) {
                    S.startingPage_required = true;
                    var n = s.getPages(), o = [];
                    for (i = 0; i < n.length; i++)p = n[i], 0 == p.get("abstract", false) && o.push({
                        value: p.getId(),
                        text: p.get("title") + " - " + p.get("url"),
                        page: p,
                        pageId: "(" + p.getId() + ")"
                    });
                    S.startingPage.pages = o
                }
            }

            function h() {
                u.all({appId: r.app_id}).$promise.then(function (e) {
                    S.securityprofiles = e, console.info("Security Profiles", e)
                }, function () {
                    console.error("Cant get security profiles")
                })
            }

            var S = t.$new();
            S.upgrade = function () {
                e.go("dashboard.upgrade"), b.hide()
            }, S.regenMobileCode = function () {
                v.regenMobileCode(S.project).then(function (e) {
                    S.project.mobile_code = e.data.code
                })
            }, S.Designer = s, r ? S.project = r : (r = s.getProject(), S.project = r), S.startingPage_required = false, S.startingPage = {page: ""}, S.setStartingPage = function () {
                "" != S.startingPage.page && (t.ignoreFrameDocument = true, s.setExtra("startingPage", S.startingPage.page), s.AppGraph._save(), S.startingPage_required = false, t.$emit("outline.refresh"))
            }, ("undefined" == typeof s.getProject() || r.id !== s.getProject().id) && (s.init(), m.clearIdMap(), s.setProject(r), f.setFrameInjectables(n, t, document, angular, window)), l(), S.hasIcon = false, S.hasSplash = false;
            var P = s.getExtra("iconsplash");
            console.info("CHECK ICON", P), P && P.icon && (S.hasIcon = true), P && P.splash && (S.hasSplash = true), t.$on("iconsplash", function () {
                var e = s.getExtra("iconsplash");
                e && e.icon && (S.hasIcon = true), e && e.splash && (S.hasSplash = true)
            }), S.editIconSplash = function (e) {
                y.show(r), e.stopPropagation()
            }, S.isPayingProject = function () {
                return t.isPayingCustomer() || null != r.team_id ? true : false
            }, h(), S.build = {
                platform: "",
                build_mode: "",
                security_profile_tag: ""
            }, S.packageTab = "build", S.oldIdentifier = r.binary_identifier, S.setIdentifier = function () {
                r.$save().then(function (e) {
                    S.oldIdentifier = r.binary_identifier
                })
            }, S.cantPackage = function () {
                return "" == S.build.platform || "" == S.build.build_mode ? true : "android" == S.build.platform && "debug" == S.build.build_mode ? false : "ios" == S.build.platform && "" == S.build.security_profile_tag ? true : "android" == S.build.platform && "release" == S.build.build_mode && "" == S.build.security_profile_tag ? true : false
            }, S.setup = function () {
                S.packageTab = "settings", S.showCredential = false
            }, S.profileRequired = function () {
                return "undefined" == typeof S.securityprofiles ? true : S.securityprofiles.length > 0 ? false : "android" == S.build.platform && "release" == S.build.build_mode ? true : "ios" == S.build.platform ? true : false
            }, S.buildMessage = "", S.packageProject = function () {
                S.buildMessage = "", o.post(d.get("creator_api_url") + "/creator/" + r.app_id + "/package/builds", S.build).then(function (e) {
                    console.log("SUCCESS", e), "Accepted" == e.statusText ? (S.buildMessage = "Your build will be emailed to you.", c.t("Successfully Sent Build", {project: r.app_id}), S.build = {
                        platform: "",
                        build_mode: "",
                        security_profile_tag: ""
                    }) : (c.t("Failed to Send Build", {project: r.app_id}), S.buildMessage = "There was an error with your build.")
                }, function (e) {
                    c.t("Error with Build", {project: r.app_id}), S.buildMessage = "There was an error with your build."
                })
            }, S.showCredential = false, S.showCredentialType = "", S.showCredentialProfile = null, S.openCredential = function (e, t) {
                S.showCredentialType = t, S.showCredentialProfile = e, S.showCredential = true
            }, S.hideCredential = function () {
                S.showCredential = false
            }, S.newSecurity = {name: ""}, S.createSecurityProfile = function () {
                ({name: S.newSecurity.name});
                u.create({appId: r.app_id}, {name: S.newSecurity.name}).$promise.then(function (e) {
                    c.t("Created Security Profile", {project: r.app_id}), h()
                }, function (e) {
                    c.t("Failed Security Profile", {project: r.app_id})
                }), S.newSecurity.name = ""
            }, S.newCredential = {}, S.newiOSCredential = function (e) {
                S.newCredential.type = "ios", S.showCredentialError = false, g.create({
                    appId: r.app_id,
                    profileTag: e
                }, S.newCredential).$promise.then(function (e) {
                    c.t("New iOS Credential", {project: r.app_id}), h(), S.newCredential = {}, S.showCredential = false
                }, function (e) {
                    c.t("Failed iOS Credential", {project: r.app_id}), S.showCredentialError = true
                })
            }, S.newAndroidCredential = function (e) {
                S.newCredential.type = "android", g.create({
                    appId: r.app_id,
                    profileTag: e
                }, S.newCredential).$promise.then(function (e) {
                    c.t("New Android Credential", {project: r.app_id}), h(), S.newCredential = {}, S.showCredential = false
                }, function (e) {
                    c.t("Failed Android Credential", {project: r.app_id}), S.showCredentialError = true
                })
            }, S.downloadCordova = function () {
                c.t("Download Project ZIP", {project: r.app_id});
                try {
                    JSON.parse(r.html)
                } catch (e) {
                    return void(S.downloadError = "You must load your project once before exporting due to system changes.")
                }
                window.open(d.get("creator_api_url") + "/creator/" + r.app_id + "/download/cordova", "_self")
            };
            o.get(C).then(function (e) {
                var t = n(e.data)(S);
                w = t, a[0].body.appendChild(t[0]), $(w).on("hidden.bs.modal", function (e) {
                    console.log("Hidden modal"), S.$destroy(), $(w).remove(), w = null
                }), b.show()
            }, function (e) {
            })
        };
        return b = {
            "export": function (e) {
                c.t("Export Modal Show", {}), S(e)
            }, show: function () {
                w && $(w).modal("show")
            }, hide: function () {
                w && $(w).modal("hide")
            }
        }
    }]), n.factory("Features", ["$rootScope", function (e) {
        function t(e, t, n) {
            function i(e) {
                var t = e.indexOf("-");
                return -1 !== t && (e = e.substring(0, t)), e
            }

            function o(e) {
                return (a ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(e)
            }

            e = i(e), t = i(t);
            var a = n && n.lexicographical, r = n && n.zeroExtend, l = e.split("."), s = t.split(".");
            if (!l.every(o) || !s.every(o))return NaN;
            if (r) {
                for (; l.length < s.length;)l.push("0");
                for (; s.length < l.length;)s.push("0")
            }
            a || (l = l.map(Number), s = s.map(Number));
            for (var d = 0; d < l.length; ++d) {
                if (s.length == d)return 1;
                if (l[d] != s[d])return l[d] > s[d] ? 1 : -1
            }
            return l.length != s.length ? -1 : 0
        }

        function n(e, n, i) {
            return t(e, n, i) >= 0
        }

        var i = "1.1.0", o = {"automagic-navigation": {v: "1.1.0", compare: n}}, a = {}, r = {
            init: function (e) {
                "undefined" == typeof e && (e = i), a = {};
                for (var t in o)a[t] = o[t].compare(e, o[t].v);
                console.info("FEATURES", "V" + e, a)
            }, check: function (e) {
                var t = true;
                return e ? (0 == e.indexOf("!") && (e = e.replace("!", ""), t = false), a[e] === t) : true
            }, newProjectVersion: i
        };
        return e.featureCheck = r.check, r
    }]), n.factory("FirstRun", ["$state", "$rootScope", "$compile", "$http", "$document", "Designer", function (e, t, n, i, o, a) {
        var r, l = "/tmpl/designer/first-run-modal.tmpl.html", s = function () {
        };
        return s(), {
            go: function (e) {
                if (r)return void $(r).modal("show");
                i.get(l).then(function (t) {
                    var i = n(t.data)(e);
                    r = i, o[0].body.appendChild(i[0]), $(r).modal({show: true, backdrop: "static"})
                }, function (e) {
                })
            }, hide: function () {
                r && $(r).modal("hide")
            }
        }
    }]), n.factory("StandardModal", ["$state", "$rootScope", "$http", "$compile", "$document", "$q", function (e, t, n, i, o, a) {
        var r, l, s = "/tmpl/designer/standard-modal.tmpl.html", d = function (e) {
            var a = t.$new();
            a.data = {
                message: e.message,
                cancel: e.cancel,
                ok: e.ok,
                warning: e.warning,
                title: e.title,
                requiredInput: e.requiredInput,
                actualRequiredInput: "",
                error: "",
                template: e.template,
                height: e.height || "400px"
            }, a.SelectText = function () {
                var e, t, n = "save-error-pre", i = document, o = i.getElementById(n);
                i.body.createTextRange ? (e = document.body.createTextRange(), e.moveToElementText(o), e.select()) : window.getSelection && (t = window.getSelection(), e = document.createRange(), e.selectNodeContents(o), t.removeAllRanges(), t.addRange(e))
            };
            var d = s;
            "undefined" != typeof a.data.template && (d = a.data.template);
            n.get(d).then(function (t) {
                var n = i(t.data)(a);
                r = n, o[0].body.appendChild(n[0]), a.cancelClick = function () {
                    e.callback("cancel")
                }, a.okClick = function () {
                    return a.data.requiredInput && a.data.actualRequiredInput != a.data.requiredInput ? void(a.data.error = "You did not type the required text.") : (l.hideModal(), void e.callback("ok"))
                }, a.warningClick = function () {
                    return a.data.requiredInput && a.data.actualRequiredInput != a.data.requiredInput ? void(a.data.error = "You did not type the required text.") : (l.hideModal(), void e.callback("warning"))
                }, l.showModal()
            }, function (e) {
            })
        };
        return l = {
            show: function (e) {
                d(e)
            }, showModal: function () {
                r && $(r).modal("show")
            }, hideModal: function () {
                r && $(r).modal("hide")
            }
        }
    }]), n.factory("PageTemplates", ["$http", "Features", function (e, t) {
        var n = [], i = {}, o = function (e) {
            var t, n, o;
            for (t = 0; t < e.length; t++)if (o = e[t], o.templates)for (o = o.templates, n = 0; n < o.length; n++)i[o[n].id] = o[n]
        }, a = function () {
            e.get("/tmpl/page-templates/index.json?2", {t: +new Date}).then(function (e) {
                n = e.data, o(n)
            }, function (e) {
            })
        };
        a();
        var r = {
            all: function (e) {
                var i, o, a, r, l = [];
                for (i = 0; i < n.length; i++)for (a = n[i], r = a.templates, o = 0; o < r.length; o++)e ? l.push(r[o]) : 1 == r[o].visible && t.check(r[o].feature) && l.push(r[o]);
                return console.log("Loaded templates", l), l = l.sort(function (e, t) {
                    return e.name < t.name ? -1 : e.name > t.name ? 1 : 0
                })
            }, get: function (e) {
                return i[e]
            }
        };
        return r
    }]), n.factory("ProjectDialog", ["$state", "$timeout", "$rootScope", "$compile", "$http", "$document", "$q", "Designer", "PageTemplates", "Plans", "PlansModal", "Stats", function (e, t, n, i, o, a, r, l, s, d, c, p) {
        var u, g = "/tmpl/designer/project-dialog-modal.tmpl.html", h = function () {
        };
        return h(), {
            go: function (l) {
                var d = r.defer(), c = this;
                u && $(u).modal("hide");
                var h = n.$new();
                h.rootScope = n, h.teamItems = l, h.data = {team: null}, l.length > 0 && (h.data.team = l[0]), h.projectName = "", h.starterPages = s.all(true), h.starterPage = "", h.doUpgrade = function () {
                    c.hide(), p.t("Project Limit Upgrade Button Modal"), e.go("dashboard.upgrade")
                }, h.getPageTemplateName = function (e) {
                    return e + " Template"
                }, h.createProject = function () {
                    if (!h.data.team && n.getNumPersonalProjects() >= n.getAvailableProjects() && p.t("Stolen Project"), h.templateError = false, "" == h.starterPage)return void(h.templateError = true);
                    var e;
                    if ("sidemenutabs" == h.starterPage)e = {
                        name: "SideMemu+Tabs",
                        id: "sidemenutabs",
                        type: "sidemenutabs"
                    }; else for (var t = 0; t < h.starterPages.length; t++)h.starterPages[t].type == h.starterPage && (e = h.starterPages[t]);
                    c.hide(), d.resolve({name: h.projectName, team: h.data.team, template: e})
                };
                o.get(g).then(function (e) {
                    var n = i(e.data)(h);
                    u = n, a[0].body.appendChild(n[0]), $(u).modal("show"), t(function () {
                        $(u).find('input[type="text"]').focus()
                    }, 200)
                }, function (e) {
                });
                return d.promise
            }, hide: function () {
                u && $(u).modal("hide")
            }
        }
    }]), n.factory("Projects", ["$state", "$rootScope", "$q", "$http", "Project", "Stats", "Features", function (e, t, n, i, o, a, r) {
        return {
            createNew: function (e, l, s) {
                var d = n.defer();
                return i.get("/tmpl/app-templates/nav.json").then(function (n) {
                    var i = n.data;
                    a.t("New Project", {template: l.name}), i.extra = {
                        fromTemplate: l.id,
                        appType: l.type
                    }, i.v = r.newProjectVersion;
                    var c = {name: e, team_id: s && s.id, document: JSON.stringify(i), html: "<html></html>"};
                    (c.team_id || t.isPayingCustomer()) && (c.share_lock = "private");
                    var p = new o(c);
                    p.$save().then(function (e) {
                        t.$emit("project.created", e), d.resolve(e)
                    }, function (e) {
                        t.$emit("project.createError", e), d.reject(e)
                    })
                }, function (e) {
                    console.error("Unable to load starting template", e)
                }), d.promise
            }
        }
    }]), n.factory("Shortcuts", ["$state", "$rootScope", "Designer", "Action", function (e, t, n, i) {
        var o = false;
        return {
            bind: function () {
                function e() {
                    var e = "";
                    return "undefined" != typeof window.getSelection ? e = window.getSelection().toString() : "undefined" != typeof document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text), e
                }

                o || (o = true, t.$on("iframe.ready", function (e, t) {
                    bindKeymasterEvents(t.document, t)
                }), $(document).bind("keydown", function (e) {
                    return (e.ctrlKey || e.metaKey) && 83 == e.which ? (n.save(), e.preventDefault(), false) : void 0
                }), key("esc, escape", "all", function (e) {
                    return n.cancelAction(), n.deselect(), false
                }), key("delete, backspace, del", "all", function (e) {
                    return n.isEditing() ? void 0 : (n.removeSelectedComponent(), false)
                }), key("ctrl+s, ⌘+s", "all", function (e) {
                    return n.save(), false
                }), key("ctrl+c, ⌘+c", "all", function (t) {
                    return n.isEditing() || "" !== e() ? void 0 : (n.copy(), false)
                }), key("ctrl+x, ⌘+x", "all", function (e) {
                    return n.isEditing() ? void 0 : (n.cut(), false)
                }), key("ctrl+v, ⌘+v", "all", function (e) {
                    return n.isEditing() ? void 0 : (n.paste(), false)
                }), key("ctrl+d, ⌘+d", "all", function (e) {
                    return n.isEditing() ? void 0 : (n.duplicate(), false)
                }), key("ctrl+z, ⌘+z", "all", function (e) {
                    return n.isEditing() ? void 0 : (i.undo(), false)
                }), key("ctrl+shift+z,⌘+shift+z,ctrl+y,⌘+y", "all", function (e) {
                    return n.isEditing() ? void 0 : (i.redo(), false)
                }))
            }
        }
    }]), n.factory("Stats", ["$state", "$rootScope", function (e, t) {
        var n = "";
        return {
            t: function (e, t) {
                "undefined" == typeof t && (t = {}), t.id = n, mixpanel.track(e, t), Intercom("trackEvent", e, t)
            }, register: function (e) {
            }, increment: function (e, t) {
            }, id: function (e) {
            }, intercomUpdate: function (e) {
                Intercom("update", e)
            }, intercomBoot: function (e) {
                Intercom("shutdown");
                var t = {app_id: "yqjddt6b", user_id: e.id, name: e.name, email: e.email, created_at: e.date_joined};
                (e.subscription && e.subscription.active || e.teams.length > 0) && (e.subscription && (t.plan_id = e.subscription.plan_id_string), t.widget = {activator: "#IntercomDefaultWidget"}), Intercom("boot", t)
            }
        }
    }]), n.factory("Tutorials", ["$state", "$rootScope", "$http", "$compile", "$document", "$sce", function (e, t, n, i, o, a) {
        for (var r, l, s = "/tmpl/designer/tutorial-modal.tmpl.html", d = [{
            key: "deepdive",
            name: "Creator Deep Dive",
            description: "An indepth overview of the new Creator",
            id: "lTLTs2ZA2JQ",
            official: true
        }, {
            key: "sell",
            name: "Sell your Client a Mobile App",
            description: "Use Creator to Close Deals",
            id: "XPOXiwUFj7E",
            official: true,
            blog: "http://blog.ionic.io/sell-your-client-a-mobile-app/"
        }, {
            key: "tabs",
            name: "Using Tabs (Old Projects)",
            description: "How to use Tab pages",
            id: "ZB888gL9TI8",
            official: true,
            hide: true
        }, {
            key: "sidemenu",
            name: "Using Side Menus (Old Projects)",
            description: "How to use the Side Menu",
            id: "btc5kgUkjyc",
            official: true,
            hide: true
        }, {
            key: "clizip",
            name: "Export: CLI & ZIP",
            description: "Using the CLI & ZIP Export features",
            id: "CBsBKRriZFI",
            official: true
        }, {
            key: "lists",
            name: "Lists",
            description: "How to use Lists and List Components",
            id: "e-OpKHsE29k",
            official: true
        }, {
            key: "forms",
            name: "Forms",
            description: "How to use Forms and Form Components",
            id: "uVwVYiwPQrE",
            official: true
        }, {
            key: "linking",
            name: "Linking Pages",
            description: "How to link pages to each other",
            id: "T0l-2DoiZjc",
            official: true
        }, {
            key: "defaultpage",
            name: "Set Default Page",
            description: "How to set the starting page for your app",
            id: "3jXJVdpbt28",
            official: true
        }, {
            key: "appcamp",
            name: "AppCamp",
            description: "Getting started learning Ionic Framework",
            id: "yXNNKSmEdpM",
            official: true
        }, {
            key: "staticdynamic",
            name: "Static to Dynamic",
            description: "Turn your prototype into a real app!",
            id: "R9UwlFu56Wo",
            community: true,
            author: "Raymond Camden",
            blog: "http://www.raymondcamden.com/2016/01/11/going-from-static-to-dynamic-with-ionic-creator"
        }], c = {}, p = 0; p < d.length; p++)c[d[p].key] = d[p];
        var u = function (e) {
            var d = t.$new();
            d.tutorial = c[e], d.tutorial.videourl = a.trustAsResourceUrl("https://www.youtube.com/embed/" + d.tutorial.id + "?list=PLOMESIqyrpf-rpNjFGzuCoTwNdv_-PUD1");
            n.get(s).then(function (e) {
                var t = i(e.data)(d);
                r = t, o[0].body.appendChild(t[0]), l.showModal()
            }, function (e) {
            })
        };
        return l = {
            show: function (e) {
                u(e)
            }, showModal: function () {
                r && ($(r).modal("show"), $(r).on("hidden.bs.modal", function () {
                    $("#tutorial-modal iframe").removeAttr("src")
                }))
            }, hideModal: function () {
                r && $(r).modal("hide")
            }, tutorials: d
        }
    }])
}();