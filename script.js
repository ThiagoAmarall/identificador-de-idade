function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || parseFloat(fano.value) > ano){
        alert('[ERROR] Verifique o ano novamente!!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - parseFloat(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/crianca-homem.jpg' )
            } else if (idade < 21){
                img.setAttribute('src', './imagens/jovem-homem.jpg' )
            } else if (idade < 50){
                img.setAttribute('src', './imagens/adulto-homem.jpg' )
            }else{
                img.setAttribute('src', './imagens/idoso-homem.jpg' )
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', './imagens/crianca-mulher.jpg' )
            } else if (idade < 21){
                img.setAttribute('src', './imagens/jovem-mulher.jpg' )
            } else if (idade < 50){
                img.setAttribute('src', './imagens/adulta-mulher.jpg' )
            }else{
                img.setAttribute('src', './imagens/idosa-mulher.jpg' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos'
        res.appendChild(img)
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        
       
    }
}