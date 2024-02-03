---
title: Table.View
---

# Table.View


## Description

Creează sau extinde un tabel cu rutine de tratare definite de utilizator pentru operațiuni de interogare și acțiune.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Returnează o vizualizare a <code>table</code> unde funcțiile specificate în <code>handlers</code> sunt utilizate în locul comportamentului implicit al unei operațiuni atunci când operațiunea este aplicată vizualizării.<br />Dacă se furnizează <code>table</code>, toate funcțiile rutinei de tratare sunt opționale. Dacă <code>table</code> nu este furnizat, sunt necesare funcțiile rutinei de tratare <code>GetType</code> și <code>GetRows</code>. Dacă nu este specificată o funcție rutină de tratare pentru o operațiune, comportamentul implicit al operațiunii se aplică în schimb la <code>table</code> (cu excepția cazului <code>GetExpression</code>).<br />Funcțiile rutină de tratare trebuie să returneze o valoare care este semantic echivalentă cu rezultatul aplicării operațiunii împotriva <code>table</code> (sau vizualizarea rezultată în cazul <code>GetExpression</code>).<br />Dacă o funcție rutină de tratare declanșează o eroare, comportamentul implicit al operațiunii se aplică vizualizării.<br /><code>Table.View</code> poate fi utilizat pentru a implementa plierea la o sursă de date: traducerea interogărilor M în interogări specifice sursei (de exemplu, pentru a crea instrucțiuni T-SQL din interogări M).<br />Consultați documentația conectorului particularizat publicat Power Query pentru o descriere mai completă a <code>Table.View</code>.<br />


## Examples

### Example #1 
Creați o vizualizare de bază care nu necesită accesarea rândurilor pentru a determina tipul sau numărul de rânduri.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
