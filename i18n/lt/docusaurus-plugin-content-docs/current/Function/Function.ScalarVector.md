---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Panaudojant vektoriaus funkciją sukuriama skaliarinė funkcija, vykdanti kelių iškvietimų siuntimą paketais.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Pateikiama <code>scalarFunctionType</code> tipo skaliarinė funkcija, kuri iškviečia <code>vectorFunction</code> su viena argumentų eilute ir pateikia vieną jos išvestį. Be to, kiekvienai įvesčių lentelės (pvz., Table.AddColumn) eilutei pakartotinai pritaikius skaliarinę funkciją, vietoj jos visoms įvestims bus vieną kartą pritaikyta <code>vectorFunction</code>.<br /><code>vectorFunction</code> bus perduota į lentelę, kurios stulpeliai pagal pavadinimą ir padėtį atitiks <code>scalarFunctionType</code> parametrus. Kiekvienoje šios lentelės eilutėje pateikiami vieno skaliarinės funkcijos iškvietimo argumentai, naudojant <code>scalarFunctionType</code> parametrus atitinkančius stulpelius. <br /><code>vectorFunction</code> turi pateikti tokio paties ilgio sąrašą kaip įvesties lentelė, kurio kiekvienoje pozicijoje esančio elemento rezultatas turi būti toks pats, kaip ir vertinant tos pačios pozicijos įvesties eilutės skaliarinę funkciją. <br />Numatoma, kad įvesties lentelė bus perduota srautu, todėl tikimasi, kad <code>vectorFunction</code> perduos savo išvestį srautu, kai bus gauta įvestis, vienu metu apdorojant tik vieną įvesties segmentą. Tiksliau tariant, <code>vectorFunction</code> negali išvardyti įvesties lentelės daugiau nei vieną kartą.<br />



## Category
Function
