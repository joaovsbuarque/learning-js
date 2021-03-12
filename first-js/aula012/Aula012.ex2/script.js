function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente !`)
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'test.jpg ')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-homem.png ')
            }else if (idade < 50 ) {
                // ADULTO
                img.setAttribute('src', 'adulto-homem.png ')
            }else {
                // SENHOR 
                img.setAttribute('src','senhor-homem.png ')
            }
        }else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src','bebe-mulher.png')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src','jovem-mulher.png')
            }else if (idade < 50 ) {
                // ADULTO
                img.setAttribute('src','adulta-mulher.png')
            }else {
                // SENHOR 
                img.setAttribute('src','senhora-mulher.png')
            }
            gênero = 'Mulher'
        }
        // console.log(`Detectamos ${gênero} com ${idade} anos`)
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}