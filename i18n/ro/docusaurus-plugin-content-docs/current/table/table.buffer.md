---
title: Table.Buffer
---

# Table.Buffer


Utilizează un tabel ca zonă tampon în memorie, izolându-l de modificările externe în timpul evaluării.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Utilizează un tabel ca zonă tampon în memorie, izolându-l de modificările externe în timpul evaluării. Utilizarea ca zonă tampon este superficială. Aceasta forțează evaluarea oricărei valori scalare a celulelor, dar lasă valorile non-scalare (înregistrări, liste, tabele ș.a.m.d.) ca atare.

-   `table`: tabelul care va fi stocat în memorie.
-   `options`: (opțional) Se pot folosi următoarele valori pentru înregistrările de opțiuni:
    -   `BufferMode`: modul de stocare care descrie tipul de stocare ce va fi efectuată. Această opțiune poate fi `BufferMode.Eager` sau `BufferMode.Delayed`.

Utilizarea acestei funcții poate sau nu să accelereze execuția interogărilor. În unele cazuri, interogările pot rula mai lent din cauza costului suplimentar de a citi toate datele și de a le stoca în memorie, precum și pentru că stocarea împiedică plierea în sens descendent. Dacă datele nu trebuie să fie memorate în zona tampon, dar doriți doar să preveniți plierea în sens descendent, utilizați `Table.StopFolding`.


## Examples

### Example #1
Încărcați toate rândurile unui tabel SQL în memorie, astfel încât nicio operațiune în sens descendent să nu mai poată interoga serverul SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
