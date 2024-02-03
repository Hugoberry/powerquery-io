---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Creează o funcție scalară peste o funcție vectorială, procesând în loturi mai multe invocări.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Returnează o funcție scalară de tip <code>scalarFunctionType</code> care invocă <code>vectorFunction</code> cu un singur rând de argumente și returnează rezultatul său unic. În plus, când funcția scalară este aplicată repetat pentru fiecare rând al unui tabel de intrări, precum cel din Table.AddColumn, <code>vectorFunction</code> se va aplica o singură dată pentru toate datele de intrare.<br /> <code>vectorFunction</code> va primi un tabel ale cărui coloane se potrivesc ca nume și poziție cu parametrii <code>scalarFunctionType</code>. Fiecare rând din acest tabel conține argumentele pentru o apelare a funcției scalare, în timp ce coloanele corespund parametrilor <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> trebuie să returneze o listă de aceeași lungime cu tabelul de intrare, al cărei element din fiecare poziție trebuie să aibă același rezultat ca evaluarea funcției scalare pe rândul de intrare din aceeași poziție.<br />Se așteaptă ca tabelul de intrare să fie transmis în flux, astfel că se așteaptă ca <code>vectorFunction</code> să-și transmită în flux rezultatul pe măsură ce sosesc intrările, lucrând cu un singur bloc de intrare la un moment dat. În special, <code>vectorFunction</code> nu trebuie să enumere tabelul său de intrări de mai multe ori.<br />



## Category
Function
