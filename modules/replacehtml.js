module.exports = function replacehtml(tamplate, product) {
     let r = tamplate.replace('{{%image%}}', product.productImage)
     r = r.replace('{{%description%}}', product.Description)
     r = r.replace('{{%name%}}', product.name)
     r = r.replace('{{%price%}}', product.price)
     r = r.replace('{{%id%}}', product.id)
     r = r.replace('{{%rom%}}', product.ROM)

     return r
}