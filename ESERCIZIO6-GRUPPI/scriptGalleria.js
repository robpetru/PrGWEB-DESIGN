function Card(img,titolo,prezzo,disponibilita){
this.img=img;
this.titolo=titolo;
this.prezzo=prezzo;
this.disponibilita=disponibilita;

this.esponi = function(){
var immagine= "<img src='" + this.img +"'>"+"<br>"+
          "<h1>"+this.titolo+"</h1>"+"<br>"+
          "<p>" + this.prezzo +"</p>"+"<br>"+
          "<div>"+ this.disponibilita +"</div>";
          return immagine

}
this.acquista = function(){
           var scalaDisponibilita= this.disponibilita = disponibilita-1;
           return scalaDisponibilita
}
}

var galleria = [
          new Card("./img/img1.JPG","Volto di donna a colori","€ 200",5),
          new Card("./img/img2.JPG","Volto di donna in B/W","€ 300",5),
          new Card("./img/img3.JPG","Bambini sorridenti in B/W","€ 250",10),
          new Card("./img/img4.JPG","Bambini seduti in B/W","€ 250",5)

]
 var galleriaImmagini = document.getElementById("galleriaImmagini");
 galleria.forEach(element => {
          galleriaImmagini.innerHTML+= element.esponi() 
 });
//  questa è una bozza del lavoro che vorrei condividere con voi bisogna ancora inserire un foglio di stile per ridimensionare le immagini e continuare con il resto