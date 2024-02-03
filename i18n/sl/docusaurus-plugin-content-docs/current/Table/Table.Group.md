---
title: Table.Group
---

# Table.Group


## Description

Združi vrstice v tabeli, ki imajo enak ključ.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Združi vrstice parametra <code>table</code> po stolpcih ključa, ki jih določa <code>key</code>. <code>key</code> je lahko ime enega stolpca ali seznam imen stolpcev.    Za vsako skupino je ustvarjen zapis, ki vsebuje stolpce ključa (in njihove vrednosti) ter vse združene stolpce, ki jih določa <code>aggregatedColumns</code>.    Izbirno lahko navedete še parametra <code>groupKind</code> in <code>comparer</code>.<br />    <br />    Če so podatki že razvrščeni po stolpcih ključa, lahko navedete <code>groupKind</code> funkcije GroupKind.Local. S tem boste v nekaterih primerih morda izboljšali delovanje združevanja,    saj je za vse vrstice z določenim naborom vrednosti ključa predvideno, da so zvezne.<br />    <br />    Če navedete parameter <code>comparer</code>, morate upoštevati, da bo vrstica morda vstavljena v skupino, katerih ključi so drugačni od njenih ključev, če ta vrstica obravnava različne ključe kot enake.<br />    <br />    Ta funkcija ne zagotavlja vrstnega reda vrstic, ki jih pridobi.  


## Examples

### Example #1 
Združite tabelo tako, da dodate združevalni stolpec [skupaj], ki vsebuje vsoto cen (&#34;each List.Sum([cena])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
