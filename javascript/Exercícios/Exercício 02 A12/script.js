function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'img/homem-bebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/homem-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem.jpg')
            }else {
                img.setAttribute('src', 'img/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'img/mulher-bebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.jpg')
            }else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}