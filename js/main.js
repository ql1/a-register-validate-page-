$(function(){
    'use strict';
    // var validator = new Validator('a1245566778a',{
    //     max:100,
    //     min:18,
    //     pattern:"^[a-z0-9]*$",


    // 选中 data-rule 属性的元素

    var $inputs = $('[data-rule]')
    var $form = $('#signup')

    var inputs = []
    $inputs.each(function(index,node){
        // 解析 每一个input的data-rule 验证规则
        console.log('node',node);
        var temp = new Input(node)
        // console.log('key and val',key,val);
        inputs.push(temp)
    })
    console.log('inputs',inputs);
    $form.on('submit',function(e){
        $inputs.trigger('keyup')
        e.preventDefault()
        for (var i = 0; i < inputs.length; i++) {
            var item = inputs[i]
            var r = item.validator.is_valid()
            if (!r) {
                alert('!有误')
                return

            }
            alert('注册成功！')
        }
    })
})

    // 验证




    // user_input.validator.is_valid()
    // var test = new Input('#test')
    // var valid = test.validator.is_valid()
    //
    // // console.log('test',test);
    // // console.log('validator',test.validator);
    // console.log('valid',valid);



    // var result = validator.validate_max()
    // console.log('result',result);
    // console.log('validator',validator);
    // var result2 = validator.validate_min()
    // console.log('result2',result2);
    // var result = validator.validate_pattern()
    // console.log('result',result);

// })



// console.log('ffffffffffffffffffff');
