$(function(){
    'use strict';
    window.Validator = function(val,rule){
        console.log('rule',rule);
        this.is_valid = function(new_val){
            var key;
            console.log('new_val',new_val);
            // val = new_val || val
            if (new_val !== undefined) {
                val = new_val
            }
            console.log('val**********',val)
            // 如果不是必填项，且用户未填写任何数据则直接通过
            if (!rule.required && !val) {
                console.log('hahahah');
                return true
            }
            for(key in rule){
                // 防止重复检测
                if (key === 'required') {
                    continue
                }

                var r = this['validate_' + key]()
                if (!r) {
                    console.log('one');
                    return false
                }

            }
            console.log('muhahaha')
            console.log('rule',rule);
            return true
        }

        this.validate_max = function(){
            val = parseFloat(val);
            return val <= rule.max
        }
        this.validate_min = function(){
            val = parseFloat(val);
            return val >= rule.min
        }
        this.validate_maxlength = function(){
            val = val.toString();
            return val.length <= rule.maxlength
        }
        this.validate_minlength = function(){
            val = val.toString();
            return val.length >= rule.minlength
        }

        this.validate_numeric = function(){
            return $.isNumeric(val)
        }
        this.validate_required = function(){
            var real = $.trim(val)
            if (!real && real !== 0) {
                return false
            }
            return true
        }

        this.validate_pattern = function(){
            var reg = new RegExp(rule.pattern)
            return reg.test(val);
        }
    }
})


// console.log('hahah');
