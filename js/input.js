$(function(){
    'use strict';
    window.Input = function(selector){
        var $ele;
        var $error_ele;
        var rule = {
            required:true,
        }
        var me = this

        // init()
        this.load_validator = function(){
            console.log('rule_init',rule)
            var val = this.get_val()
            this.validator = new Validator(val,rule)
        }

        this.get_val = function(){
            return $ele.val()
        }

        function listener(){
            $ele.on('keyup',function(){
                console.log('me.get_val()',me.get_val());
                var valid = me.validator.is_valid(me.get_val())
                // console.log('r',r);
                get_error_ele()
                if (valid) {
                    $error_ele.hide()
                    // $(get_error_selector())
                }else {
                    $error_ele.show()
                }
            })
        }

        // 取得错误的对应显示元素
        function get_error_selector(){
            return '#' + $ele.attr('name') + '-input-error'
        }


        function get_error_ele(){
            $error_ele = $(get_error_selector())
        }


        function init(){
            find_ele()
            // 解析 rule
            parse_rule()
            console.log('***debug','vix;');
            // 导入数据到验证器
            me.load_validator()
            // 监听用户输入
            listener()
        }
        init()
        function find_ele(){
            if (selector instanceof jQuery) {
                $ele = selector
            }else {
                $ele = $(selector)
            }

        }

        function parse_rule(){
            var rule_string = $ele.data('rule')
            if (!rule_string) {
                return
            }
            var rule_arr = rule_string.split('|')
            for (var i = 0; i < rule_arr.length; i++) {
                var itemstr = rule_arr[i]
                var item_arr = itemstr.split(':')
                rule[item_arr[0]] = JSON.parse(item_arr[1])


            }

        }
    }
})
