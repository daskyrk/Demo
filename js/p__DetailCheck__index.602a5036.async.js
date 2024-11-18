"use strict";
(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([[7354], {
    31634: function(e, n, r) {
        var t = r(17662)
          , a = r.n(t)
          , i = r(31404)
          , o = r.n(i)
          , s = r(83068)
          , c = r(81884)
          , u = r(6889)
          , l = r(978)
          , d = r(50107);
        n.Z = function(e) {
            var n = e.order
              , r = e.deliverExtNotes
              , t = (0,
            s.Z)()
              , i = t.renderWithMathJax
              , p = t.checkMathJax
              , f = t.addMathJax
              , x = (0,
            l.useRef)(null)
              , m = function(e) {
                window.open(e, "_blank")
            };
            return (0,
            l.useEffect)((function() {
                o()(a()().mark((function e() {
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                p();
                            case 2:
                                x.current && i(x.current);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
            ), [f, p, i]),
            (0,
            d.jsxs)("section", {
                className: "p-4",
                style: {
                    backgroundColor: "#fff",
                    userSelect: "none"
                },
                ref: x,
                children: [r && (0,
                d.jsx)(d.Fragment, {
                    children: (0,
                    d.jsxs)("p", {
                        children: [(0,
                        d.jsx)("span", {
                            children: "【备注】"
                        }), (0,
                        d.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: r
                            }
                        })]
                    })
                }), n.question && (0,
                d.jsxs)(d.Fragment, {
                    children: [(0,
                    d.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0,
                        d.jsx)("span", {
                            children: "【题目】"
                        }), (0,
                        d.jsxs)(c.Z, {
                            children: [n.imgUrl && (0,
                            d.jsx)(u.Z, {
                                type: "link",
                                onClick: function() {
                                    return m(n.imgUrl)
                                },
                                children: "下载题目（图片）"
                            }), n.pptUrl && (0,
                            d.jsx)(u.Z, {
                                type: "link",
                                onClick: function() {
                                    return m(n.pptUrl)
                                },
                                children: "下载题目（PPT）"
                            })]
                        })]
                    }), (0,
                    d.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: n.question
                        }
                    })]
                }), n.answer && (0,
                d.jsxs)(d.Fragment, {
                    children: [" ", (0,
                    d.jsx)("p", {
                        children: "【答案】"
                    }), (0,
                    d.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: n.answer
                        }
                    })]
                }), n.analysis && (0,
                d.jsxs)(d.Fragment, {
                    children: [" ", (0,
                    d.jsx)("p", {
                        children: "【解析】"
                    }), (0,
                    d.jsx)("p", {
                        dangerouslySetInnerHTML: {
                            __html: n.analysis
                        }
                    })]
                })]
            })
        }
    },
    76273: function(e, n, r) {
        var t = r(17925)
          , a = r.n(t)
          , i = r(978)
          , o = r(98151)
          , s = r(50107);
        n.Z = function(e) {
            var n = e.unixTime
              , r = e.style
              , t = parseInt(String((new Date).getTime() / 1e3))
              , c = (0,
            i.useState)(n - Number(t))
              , u = a()(c, 2)
              , l = u[0]
              , d = u[1]
              , p = Object.assign({}, {
                color: "#c00"
            }, r)
              , f = function() {
                d(l >= 1 ? function(e) {
                    return e - 1
                }
                : 0)
            };
            (0,
            i.useEffect)((function() {
                var e = setInterval(f, 1e3);
                return function() {
                    e && clearInterval(e)
                }
            }
            ), []);
            var x = (0,
            i.useMemo)((function() {
                return 300 === l && o.Z.confirm({
                    title: "提示",
                    content: "还有5分钟就回收啦，赶快抢先处理啊！！！"
                }),
                0 === l ? (o.Z.confirm({
                    title: "提示",
                    content: "该试题已经回收，快去广场领取新任务吧~",
                    onOk: function() {
                        window.close()
                    },
                    onCancel: function() {
                        window.close()
                    }
                }),
                "0秒") : function(e) {
                    var n = ""
                      , r = parseInt(String(e / 3600))
                      , t = parseInt(String(e % 3600 / 60))
                      , a = e % 60;
                    return r > 0 && (n = "".concat(r, "小时")),
                    t > 0 && (n += "".concat(t, "分钟")),
                    n + "".concat(a, "秒")
                }(l)
            }
            ), [l]);
            return (0,
            s.jsxs)("div", {
                style: p,
                children: [(0,
                s.jsx)("span", {
                    children: "回收倒计时:"
                }), (0,
                s.jsx)("span", {
                    children: x
                })]
            })
        }
    },
    32470: function(e, n, r) {
        r.r(n),
        r.d(n, {
            default: function() {
                return L
            }
        });
        var t = r(17662)
          , a = r.n(t)
          , i = r(31404)
          , o = r.n(i)
          , s = r(4044)
          , c = r.n(s)
          , u = r(35118)
          , l = r.n(u)
          , d = r(79746)
          , p = r.n(d)
          , f = r(17925)
          , x = r.n(f)
          , m = r(98151)
          , h = r(51178)
          , k = r(41114)
          , w = r(37244)
          , v = r(6889)
          , b = r(48477)
          , g = r(2344)
          , j = r(978)
          , y = r(94215)
          , _ = r(60401)
          , I = r(45890)
          , T = r(31634)
          , N = r(64848)
          , Z = r(98826)
          , S = r(773)
          , q = r(76273)
          , P = r(50107)
          , M = !1
          , L = function() {
            var e, n = (0,
            j.useState)({}), r = x()(n, 2), t = r[0], i = r[1], s = (0,
            j.useState)("33%"), u = x()(s, 2), d = u[0], f = u[1], L = (0,
            j.useState)(0), C = x()(L, 2), O = C[0], R = C[1], D = (0,
            j.useState)(0), U = x()(D, 2), H = U[0], J = U[1], E = (0,
            j.useState)(0), F = x()(E, 2), A = F[0], W = F[1], z = (0,
            j.useState)(!1), V = x()(z, 2), B = V[0], X = V[1], G = (0,
            j.useRef)(null), K = (0,
            j.useState)({}), Q = x()(K, 2), Y = Q[0], $ = Q[1], ee = (0,
            y.useSearchParams)(), ne = x()(ee, 1)[0], re = (0,
            j.useMemo)((function() {
                var e, n = {}, r = p()(ne.entries());
                try {
                    for (r.s(); !(e = r.n()).done; ) {
                        var t = x()(e.value, 2)
                          , a = t[0]
                          , i = t[1];
                        n[a] = i
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return n
            }
            ), [ne]), te = (0,
            j.useMemo)((function() {
                if (!t.operation)
                    return [];
                if (!G.current || !G.current.getVideoAllTime)
                    return t.operation.filter((function(e) {
                        return "op_give_up_new" !== e.value && !e.durationCheck
                    }
                    ));
                var e = G.current.getVideoAllTime();
                return t.operation.filter((function(n) {
                    return "op_give_up_new" !== n.value && (!("op_reject_new" !== n.value || !B) || (!n.durationCheck || O / e * 100 >= n.durationCheck))
                }
                ))
            }
            ), [t, O, B]), ae = ne.get("uniqId"), ie = (0,
            j.useState)({
                uniqId: ae
            }), oe = x()(ie, 2), se = oe[0], ce = oe[1], ue = (0,
            j.useCallback)((function(e) {
                ce((function(n) {
                    return l()(l()({}, n), e)
                }
                ))
            }
            ), []);
            (0,
            j.useEffect)((function() {
                var e = t.operation || []
                  , n = Math.max.apply(Math, c()(e.filter((function(e) {
                    return !isNaN(e.durationCheck)
                }
                )).map((function(e) {
                    return e.durationCheck
                }
                ))));
                J(n > 0 ? n : 0)
            }
            ), [t]);
            var le = function() {
                var e = o()(a()().mark((function e(n) {
                    var r;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = null,
                                "detail" !== n) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4,
                                (0,
                                I.OW)({
                                    mineId: re.mineId
                                });
                            case 4:
                                r = e.sent,
                                e.next = 20;
                                break;
                            case 7:
                                if ("work" !== n) {
                                    e.next = 13;
                                    break
                                }
                                return e.next = 10,
                                (0,
                                I.fr)({
                                    uniqId: ae,
                                    type: n
                                });
                            case 10:
                                r = e.sent,
                                e.next = 20;
                                break;
                            case 13:
                                if ("order" !== n) {
                                    e.next = 19;
                                    break
                                }
                                return e.next = 16,
                                (0,
                                I.fr)({
                                    uniqId: ae,
                                    type: n
                                });
                            case 16:
                                r = e.sent,
                                e.next = 20;
                                break;
                            case 19:
                                return e.abrupt("return");
                            case 20:
                                r.data.dropDown && W(r.data.dropDown.default),
                                i(r.data),
                                ue(r.data.order);
                            case 23:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            j.useEffect)((function() {
                var e, n;
                (!_.tq || (e = document.body.clientWidth,
                n = document.body.clientHeight,
                e > 1200 && n > 800 || e > 800 && n > 1200 || (m.Z.confirm({
                    title: "提示",
                    content: "不支持移动端审核！",
                    onOk: function() {
                        window.close()
                    },
                    onCancel: function() {
                        window.close()
                    }
                }),
                0))) && o()(a()().mark((function e() {
                    var n, r, t, o;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!re.type) {
                                    e.next = 3;
                                    break
                                }
                                return le(re.type),
                                e.abrupt("return");
                            case 3:
                                return e.next = 5,
                                (0,
                                I.lA)(l()({
                                    uniqId: ae
                                }, re));
                            case 5:
                                if (n = e.sent,
                                r = n.data,
                                i(r),
                                ue(r.order),
                                !r.needNext) {
                                    e.next = 16;
                                    break
                                }
                                return e.next = 12,
                                (0,
                                I.wz)({
                                    uniqId: ae
                                });
                            case 12:
                                t = e.sent,
                                o = JSON.stringify(t.data),
                                console.log("needNext", r.needNext),
                                "{}" !== o && t.data.url ? (window.sessionStorage.setItem("nextUniqIdObj", o),
                                window.sessionStorage.setItem("needNext", r.needNext ? "1" : "0")) : (window.sessionStorage.removeItem("needNext"),
                                window.sessionStorage.removeItem("nextUniqIdObj"));
                            case 16:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
            ), [ae, ue, re]);
            var de = function() {
                var e = o()(a()().mark((function e() {
                    var n, r;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0,
                                new BroadcastChannel("refreshTable").postMessage(1),
                                {},
                                !t.needNext) {
                                    e.next = 13;
                                    break
                                }
                                return e.next = 7,
                                (0,
                                I.wz)({
                                    uniqId: ae
                                });
                            case 7:
                                n = e.sent,
                                r = n.data,
                                r.url ? window.location.href = window.document.location.origin + r.url : window.close(),
                                e.next = 14;
                                break;
                            case 13:
                                window.close();
                            case 14:
                                e.next = 19;
                                break;
                            case 16:
                                e.prev = 16,
                                e.t0 = e.catch(0),
                                console.log(e.t0);
                            case 19:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 16]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , pe = function(e) {
                var n = "请确认是否通过?";
                e.length && (n = "视频中标记了错误点，确认是否通过"),
                m.Z.confirm({
                    title: "警告",
                    content: n,
                    okText: "确认",
                    onOk: function() {
                        o()(a()().mark((function e() {
                            return a()().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        I.Sz)({
                                            uniqId: ae,
                                            ext: {
                                                checkStartTime: parseInt("".concat((new Date).getTime() / 1e3))
                                            }
                                        });
                                    case 2:
                                        de();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    cancelText: "取消"
                })
            }
              , fe = function() {
                var e = o()(a()().mark((function e(n) {
                    var r, t;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = c()(n),
                                B && !r.length && (r = [{
                                    time: 1,
                                    currentNode: {
                                        reason: ["11-2"],
                                        remarkText: "视频有问题,无法播放,请重新录制",
                                        remarkPics: []
                                    }
                                }]),
                                r.length) {
                                    e.next = 5;
                                    break
                                }
                                return h.ZP.info("至少需要一条驳回原因！"),
                                e.abrupt("return");
                            case 5:
                                t = r.map((function(e) {
                                    return {
                                        videoTime: e.time,
                                        reason: e.currentNode.reason,
                                        remarkText: e.currentNode.remarkText,
                                        remarkPics: e.currentNode.remarkPics || []
                                    }
                                }
                                )),
                                m.Z.confirm({
                                    title: "警告",
                                    content: "请确认是否不通过？",
                                    okText: "确认",
                                    onOk: function() {
                                        o()(a()().mark((function e() {
                                            return a()().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        (0,
                                                        I.cI)({
                                                            uniqId: ae,
                                                            multiReasonList: t
                                                        });
                                                    case 2:
                                                        de();
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))()
                                    },
                                    cancelText: "取消"
                                });
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , xe = function() {
                var e = o()(a()().mark((function e(n, r) {
                    var i;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r.length) {
                                    e.next = 3;
                                    break
                                }
                                return h.ZP.info("至少需要一条驳回原因！"),
                                e.abrupt("return");
                            case 3:
                                return i = r.map((function(e) {
                                    return {
                                        videoTime: e.time,
                                        reason: e.currentNode.reason,
                                        remarkText: e.currentNode.remarkText,
                                        remarkPics: e.currentNode.remarkPics || []
                                    }
                                }
                                )),
                                e.next = 6,
                                (0,
                                I.L1)({
                                    uniqId: ae,
                                    complaint: n,
                                    multiReasonList: i,
                                    url: t.upload.url
                                });
                            case 6:
                                de();
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n, r) {
                    return e.apply(this, arguments)
                }
            }()
              , me = function() {
                var e = o()(a()().mark((function e(n) {
                    var r, i;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (console.log("create_mine"),
                                r = [],
                                2 !== A) {
                                    e.next = 6;
                                    break
                                }
                                if (n.length) {
                                    e.next = 6;
                                    break
                                }
                                return h.ZP.info("至少需要一条错误原因！"),
                                e.abrupt("return");
                            case 6:
                                if (r = n.map((function(e) {
                                    return {
                                        videoTime: e.time,
                                        reason: e.currentNode.reason,
                                        remarkText: e.currentNode.remarkText,
                                        remarkPics: e.currentNode.remarkPics || []
                                    }
                                }
                                )),
                                i = Object.values(Y),
                                1 !== A || !r.length) {
                                    e.next = 12;
                                    break
                                }
                                m.Z.confirm({
                                    title: "警告",
                                    content: "视频中标记了错误点，确认是否生成正确地雷题？",
                                    okText: "确认",
                                    onOk: function() {
                                        o()(a()().mark((function e() {
                                            return a()().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        (0,
                                                        I.UI)({
                                                            uniqId: t.uniqId,
                                                            mineType: A,
                                                            multiReasonList: r,
                                                            overallJudge: i
                                                        });
                                                    case 2:
                                                        h.ZP.success("创建地雷题成功", 1, de);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))()
                                    },
                                    cancelText: "取消"
                                }),
                                e.next = 15;
                                break;
                            case 12:
                                return e.next = 14,
                                (0,
                                I.UI)({
                                    uniqId: t.uniqId,
                                    mineType: A,
                                    multiReasonList: r,
                                    overallJudge: i
                                });
                            case 14:
                                h.ZP.success("创建地雷题成功", 1, de);
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , he = function() {
                var e = o()(a()().mark((function e(n) {
                    var r, i;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = [],
                                2 !== A) {
                                    e.next = 5;
                                    break
                                }
                                if (n.length) {
                                    e.next = 5;
                                    break
                                }
                                return h.ZP.info("至少需要一条错误原因！"),
                                e.abrupt("return");
                            case 5:
                                if (r = n.map((function(e) {
                                    return {
                                        videoTime: e.time,
                                        reason: e.currentNode.reason,
                                        remarkText: e.currentNode.remarkText,
                                        remarkPics: e.currentNode.remarkPics || []
                                    }
                                }
                                )),
                                i = Object.values(Y),
                                1 !== A || !r.length) {
                                    e.next = 11;
                                    break
                                }
                                m.Z.confirm({
                                    title: "警告",
                                    content: "视频中标记了错误点，确认是否生成正确地雷题？",
                                    okText: "确认",
                                    onOk: function() {
                                        o()(a()().mark((function e() {
                                            return a()().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        (0,
                                                        I.Ru)({
                                                            uniqId: t.uniqId,
                                                            mineType: A,
                                                            multiReasonList: r,
                                                            overallJudge: i
                                                        });
                                                    case 2:
                                                        h.ZP.success("修改地雷题成功", 1, de);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))()
                                    },
                                    cancelText: "取消"
                                }),
                                e.next = 14;
                                break;
                            case 11:
                                return e.next = 13,
                                (0,
                                I.Ru)({
                                    uniqId: t.uniqId,
                                    mineType: A,
                                    multiReasonList: r,
                                    overallJudge: i
                                });
                            case 13:
                                h.ZP.success("修改地雷题成功", 1, de);
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()
              , ke = function() {
                var e = o()(a()().mark((function e(n) {
                    var r;
                    return a()().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (G.current) {
                                    e.next = 3;
                                    break
                                }
                                return h.ZP.info("请刷新重试！"),
                                e.abrupt("return");
                            case 3:
                                r = G.current.getAllMarkersList(),
                                e.t0 = n,
                                e.next = "op_pass_click_new" === e.t0 ? 7 : "op_reject_new" === e.t0 ? 9 : "op_give_up_new" === e.t0 ? 11 : "op_back_new" === e.t0 ? 13 : "op_back_complaint" === e.t0 ? 15 : "op_create_mine" === e.t0 ? 17 : "op_edit_mine" === e.t0 ? 19 : 21;
                                break;
                            case 7:
                                return pe(r),
                                e.abrupt("break", 23);
                            case 9:
                                return fe(r),
                                e.abrupt("break", 23);
                            case 11:
                                return m.Z.confirm({
                                    title: "警告",
                                    content: "请确认是否放弃?",
                                    okText: "确认",
                                    onOk: function() {
                                        o()(a()().mark((function e() {
                                            return a()().wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        (0,
                                                        I.ay)({
                                                            uniqId: ae
                                                        });
                                                    case 2:
                                                        de();
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )))()
                                    }
                                }),
                                e.abrupt("break", 23);
                            case 13:
                                return xe(0, r),
                                e.abrupt("break", 23);
                            case 15:
                                return xe(1, r),
                                e.abrupt("break", 23);
                            case 17:
                                return me(r),
                                e.abrupt("break", 23);
                            case 19:
                                return he(r),
                                e.abrupt("break", 23);
                            case 21:
                                return de(),
                                e.abrupt("break", 23);
                            case 23:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }();
            return Object.keys(t).length ? (0,
            P.jsxs)("div", {
                className: "detail-wrap",
                onMouseMove: function(e) {
                    M && f(e.clientX)
                },
                onMouseUp: function() {
                    M = !1
                },
                children: [(0,
                P.jsx)(k.Z, {
                    className: "mb-2",
                    children: (0,
                    P.jsx)(w.Z, {
                        span: 24,
                        children: (0,
                        P.jsx)("div", {
                            className: "detail-header",
                            children: (0,
                            P.jsxs)("div", {
                                className: "header-wrap",
                                children: [(0,
                                P.jsxs)("div", {
                                    className: "left-header",
                                    children: [(0,
                                    P.jsx)("div", {
                                        className: "title-wrap",
                                        dangerouslySetInnerHTML: {
                                            __html: t.title
                                        }
                                    }), t.redHint ? (0,
                                    P.jsx)("div", {
                                        style: {
                                            color: "#c00"
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: t.redHint
                                        }
                                    }) : ""]
                                }), (0,
                                P.jsxs)("div", {
                                    className: "right-header flex btn-box",
                                    children: [t.order.audioUrl && (0,
                                    P.jsx)(v.Z, {
                                        type: "primary",
                                        onClick: function() {
                                            return e = t.order.audioUrl,
                                            void window.open(e, "_blank");
                                            var e
                                        },
                                        children: "下载听力文件"
                                    }), t.work && t.work.expireTime ? (0,
                                    P.jsx)(q.Z, {
                                        unixTime: t.work.expireTime
                                    }) : ""]
                                })]
                            })
                        })
                    })
                }), (0,
                P.jsxs)(k.Z, {
                    className: "mb-6",
                    align: "stretch",
                    justify: "space-between",
                    wrap: !1,
                    children: [(0,
                    P.jsxs)(w.Z, {
                        className: "h-80vh overflow-y-auto mr-1",
                        style: {
                            width: d
                        },
                        children: [(0,
                        P.jsx)(T.Z, {
                            order: t.order
                        }), re.type ? "" : (0,
                        P.jsxs)(P.Fragment, {
                            children: [(0,
                            P.jsx)(b.Z, {
                                orientation: "left",
                                children: "日志"
                            }), (0,
                            P.jsx)("div", {
                                className: "mb-2 p-1",
                                children: (0,
                                P.jsx)(N.Z, {
                                    uniqId: ae,
                                    urlParams: re
                                })
                            })]
                        })]
                    }), (0,
                    P.jsx)("div", {
                        className: "gap-line",
                        onMouseDown: function() {
                            M = !0
                        }
                    }), t && t.upload.url && (0,
                    P.jsx)(w.Z, {
                        flex: "1",
                        className: "h-80vh overflow-y-auto",
                        children: (null === (e = t.upload) || void 0 === e ? void 0 : e.url) && (0,
                        P.jsx)(Z.Z, {
                            ref: G,
                            setWatchTime: R,
                            timeRate: H,
                            params: re,
                            videoUrl: t.upload.url,
                            remarks: t.work.remark,
                            appealRemark: t.work.appealRemark,
                            noMultiSolution: t.noMultiSolution,
                            isView: !!t.operation && 0 === t.operation.length,
                            isEdit: !t.operation || !(0 === t.operation.length && "detail" === re.type),
                            multiReasonList: t.mine && t.mine.multiReasonList ? t.mine.multiReasonList.map((function(e) {
                                return {
                                    time: e.videoTime,
                                    currentNode: l()({}, e)
                                }
                            }
                            )) : [],
                            setIsPlayerError: X,
                            setScoreObj: $
                        })
                    })]
                }), (0,
                P.jsxs)(k.Z, {
                    className: "mb-6",
                    align: "stretch",
                    justify: "space-between",
                    wrap: !1,
                    children: [(0,
                    P.jsx)(w.Z, {
                        flex: "1",
                        children: ""
                    }), (0,
                    P.jsxs)(w.Z, {
                        flex: "2",
                        children: [t.dropDown && t.dropDown.options && t.dropDown.options.length ? (0,
                        P.jsxs)("div", {
                            children: [(0,
                            P.jsx)("span", {
                                children: "".concat(t.dropDown.label, ": ")
                            }), (0,
                            P.jsx)(g.Z, {
                                disabled: !!t.operation && 0 === t.operation.length,
                                style: {
                                    width: 120
                                },
                                options: t.dropDown.options,
                                value: A,
                                onChange: W
                            })]
                        }) : "", (0,
                        P.jsxs)("div", {
                            className: t.operation && t.operation.findIndex((function(e) {
                                return "op_give_up_new" === e.value
                            }
                            )) > -1 ? "btn-wrap1" : "btn-wrap",
                            children: [t.operation && t.operation.findIndex((function(e) {
                                return "op_give_up_new" === e.value
                            }
                            )) > -1 ? (0,
                            P.jsx)(v.Z, {
                                type: "link",
                                onClick: function() {
                                    return ke("op_give_up_new")
                                },
                                children: "放弃"
                            }) : "", (0,
                            P.jsx)(S.Z, {
                                uniqId: t.uniqId,
                                ignoreList: [t.dropDown && t.dropDown.category && t.dropDown.category.length ? "" : "category"],
                                data: te,
                                rowData: se,
                                cb: ke
                            })]
                        })]
                    })]
                })]
            }) : (0,
            P.jsx)("div", {
                children: "Loading"
            })
        }
    }
}]);
//# sourceMappingURL=p__DetailCheck__index.602a5036.async.js.map
