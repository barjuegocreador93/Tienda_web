
//Propiedades:
function prt(name, atr, requ)
{
    this.name=name;
    this.atr=atr;
    this.requ=requ;
    this.check=0; 
    this.print_html=function()
    {
        return "<li><strong>"+this.name+":</strong><samp>"+this.atr+"</samp></li>";
    };
}
//Articulo o Clase 
function art(tipo,cod, name, presio, ext)
{
    var m=new prt("Presio",presio,"si");
    this.tipo=tipo;
    this.code=cod;
    this.name=name;
    this.ptrs=[];
    this.ext=ext;
    this.ptrs.push(m);
    delete m;
    this.newPrt= function(name, atr)
    {
        var man= new prt(name,atr);
        this.ptrs.push(man);
    };
    this.print_html=function(form, ind, name)
    {
        form.
      var r = "<h2 class='"+name+ind+" getText'"+">"+this.name+"</h2>"; 
        for(var i=0;i<this.ptrs.length&&form==="form";i++)
            {                
                if(i===0)r=r+"<ul>";
                r=r+this.ptrs[i].print_html();
                if(i===this.ptrs.length-1)r=r+"</ul>";
            }
        for(var i=0;i<this.ptrs.length&&form==="hover";i++)
            {                
                if(i===0)r=r+"<ul class='"+name+"s"+ind+" h_2'>";
                r=r+this.ptrs[i].print_html();
                if(i===this.ptrs.length-1)r=r+"</ul>";
            }
        return r;
    };   
}
//Todos los Articulos

function ARTS(name)
{
    this.name=name;
    this.n_arts=0;
    this.arts=[];        
    //insercion por code:
   
    this.createArt=function(tipo,cod,name,presio,ext)
    {
        
        var n = new art(tipo,cod,name,presio,ext);
        this.arts.push(n);
        this.n_arts++;
        
    };
    this.newPrt_art= function(indice,name,atr,req)
    {
        if(indice > this.n_arts||indice < 0)
            {
                alert("Error 0001");
            }
        else
            {              
                var npr=new prt(name,atr,req);
                this.arts[indice].ptrs.push(npr);
            }
        
    };
    this.print_html=function(form, lug)
    { 
        var w=[];       
      for(var i=0;i<this.arts.length;i++)
          {                            
              $(lug).append(this.arts[i].print_html(form,i+1,this.name));
          }
    };
    this.click_art_html=function(lug)
    {
        
         for(var i=0;i<this.arts.length;i++)
          {                            
              $(lug).append(this.arts[i].print_html("hover",i+1,this.name));              
              
          }
        var api= new doc(this.name,this.name+"s");
        api.main();
    };
}

var pros=new art("",0.0);

var Global= new ARTS("prom");
Global.createArt("Procesadores","2154","Procesador 1",145.36,0);
Global.newPrt_art(0,"Nucleos",4,"no");
Global.newPrt_art(0,"Velocidad",3.4,"no");
Global.newPrt_art(0,"Poder",-60),"si";
Global.createArt("Procesadores","2184","Procesador 2",645.36,0);
Global.newPrt_art(1,"Nucleos",8,"no");
Global.newPrt_art(1,"Velocidad",3.9,"no");
Global.newPrt_art(1,"Poder",-95,"si");
Global.createArt("Board","56465","Board 1",362.2);
Global.newPrt_art(2,"Poder",0,"si");
Global.newPrt_art(2,"Prcesador",pros,"si");
Global.createArt("Fuente Poder","2314","Poder 1",251.36,0);
Global.newPrt_art(3,"Poder",500,"no");
delete pros;

Global.print_html("htm_button","#Global");
function pc()
{
    this.capital=0.0;
    this.Cap_actual=0.0;
    this.procesador=new art("Procesador","",0.0,0);
    this.board=new art("Board","",0.0,0);
    this.poder=new art("Fuente Poder","",0.0,0);    
}






