---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Vraća sadržaj Excel radne sveske.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Vraća sadržaj Excel radne sveske.    <ul>     <li> <code>useHeaders</code> može da bude bez vrednosti, logička vrednost (tačno/netačno) koja pokazuje da li prvi red svake vraćene tabele treba tretirati kao zaglavlje ili zapis sa opcijama. Podrazumevana vrednost: netačno.</li>     <li> <code>delayTypes</code> može da bude bez vrednosti ili logička vrednost (tačno/netačno) koja pokazuje da li kolone svake vraćene tabele treba ostaviti netipiziranim. Podrazumevana vrednost: netačno.</li>    </ul>    Ako je zapis naveden za <code>useHeaders</code> (i ako je <code>delayTypes</code> bez vrednosti), mogu da budu navedena sledeća polja zapisa:    <ul>     <li> <code>UseHeaders</code>: Može da bude bez vrednosti ili da bude logička vrednost (tačno/netačno) koja pokazuje da li prvi red svake vraćene tabele treba tretirati kao zaglavlje. Podrazumevana vrednost: netačno.</li>     <li> <code>DelayTypes</code>: Može da bude bez vrednosti ili da bude logička vrednost (tačno/netačno) koja pokazuje da li kolone svake vraćene tabele treba ostaviti netipiziranim. Podrazumevana vrednost: netačno.</li>     <li> <code>InferSheetDimensions</code>: Može da bude bez vrednosti ili da bude logička vrednost (tačno/netačno) koja pokazuje da li oblast radne sveske koja sadrži podatke treba izvesti čitanjem same radne sveske, a ne čitanjem dimenzija metapodataka iz datoteke. To može da bude korisno u slučajevima kada su metapodaci o dimenzijama netačni. Imajte na umu da je ova opcija podržana samo za Open XML Excel datoteke, ne samo za zastarele Excel datoteke. Podrazumevana vrednost: netačno.</li>    </ul>    


## Examples

### Example #1 
Vratite sadržaj Lista1 iz Excel radne sveske.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
