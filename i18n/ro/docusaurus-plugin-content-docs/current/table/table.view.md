---
title: Table.View
---

# Table.View


Creează sau extinde un tabel cu rutine de tratare definite de utilizator pentru operațiuni de interogare și acțiune.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Returnează o vizualizare a `table` unde funcțiile specificate în `handlers` sunt utilizate în locul comportamentului implicit al unei operațiuni atunci când operațiunea este aplicată vizualizării.

Dacă se furnizează `table`, toate funcțiile rutinei de tratare sunt opționale. Dacă `table` nu este furnizat, sunt necesare funcțiile rutinei de tratare `GetType` și `GetRows`. Dacă nu este specificată o funcție rutină de tratare pentru o operațiune, comportamentul implicit al operațiunii se aplică în schimb la `table` (cu excepția cazului `GetExpression`).

Funcțiile rutină de tratare trebuie să returneze o valoare care este semantic echivalentă cu rezultatul aplicării operațiunii împotriva `table` (sau vizualizarea rezultată în cazul `GetExpression`).

Dacă o funcție rutină de tratare declanșează o eroare, comportamentul implicit al operațiunii se aplică vizualizării.

`Table.View` poate fi utilizat pentru a implementa plierea la o sursă de date: traducerea interogărilor M în interogări specifice sursei (de exemplu, pentru a crea instrucțiuni T-SQL din interogări M).

Consultați documentația conectorului particularizat publicat Power Query pentru o descriere mai completă a `Table.View`.


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
