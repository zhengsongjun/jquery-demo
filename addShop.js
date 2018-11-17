var mock = [
    {
        url:'1',
        name:'macbook+',
        price:'14888'
    },
    {
        url:'2',
        name:'macbook pro',
        price:'26888'
    },{
        url:'3',
        name:'inphoe',
        price:'4699'
    }
]

 


//添加三个商品
function randShop(){
        randitem()
        randitem()
        randitem()
}


//渲染商品列表
function randitem(){
    var i =  Math.floor(Math.random()*3);
    var img = '<img src=https://picsum.photos/200/200/?image='+mock[i].url+'>'
    var price = '<p class="price">'+mock[i].price+'</p>'
    var name  = '<p class="name">'+mock[i].name+'</p>'
    var mode = '<div class="mode none"><div class="remove">删除</div></div>'
    var item = '<li>'+img+name+price+mode+'</li>'
    $('ul').append(item)
}

//首次渲染列表
randShop();


//点击添加获取列表
$('.add').click(function(){
    randShop()
})

$('.change').on('click',function(){
    $('.mode').toggleClass('none')
})

$('ul').on('click','.mode .remove',function(){
    $(this).parent().parent().remove()
})

// $('.mode .remove').on('click','li',function(){

//     console.log('sss')
// })




// $('ul').append()