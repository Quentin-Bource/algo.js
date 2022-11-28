function askTvSerie( take_name, what_year, Who_cast)
{
    let serietv = {
        nom: take_name,
        year : what_year ,
        cast: Who_cast
        }
    return (serietv);
}
function createseries() {

     let Tvseries = serietv( "Jeanne", 2018, ["Jeanne Dacosta","Michelle Ornandez", "Victoire Claquette"]);

     let resultat = "Nom : " + Tvseries[take_name] + "Année : " + Tvseries[what_year] + "Cast : " + Tvseries[Who_cast];

     console.log(resultat)
 }