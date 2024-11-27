const home_inc = document.getElementById('home-inc');
const away_inc = document.getElementById('away-inc');
const home_dec = document.getElementById('home-dec');
const away_dec = document.getElementById('away-dec');
const reset_btn = document.getElementById('reset-bt');
const home_val = document.getElementById('home-val');
const away_val = document.getElementById('away-val');

let home_count = 0;
let away_count = 0;

home_inc.addEventListener('click',function()
{
    home_val.innerText = ++home_count;
})
home_dec.addEventListener('click',function()
{
    if(home_count>0)
    {
        home_val.innerText = --home_count;
    }
})
away_inc.addEventListener('click',function()
{
    away_val.innerText = ++away_count;
})
away_dec.addEventListener('click',function()
{
    if(away_count>0)
    {
        away_val.innerText = --away_count;
    }
})
reset_btn.addEventListener('click',function()
{
    home_count = 0;
    home_val.innerText = 0;
    away_count = 0;
    away_val.innerText = 0;
})