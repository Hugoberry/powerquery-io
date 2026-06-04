---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Combină coloanele specificate într-o nouă coloană înregistrări de valoare, unde fiecare înregistrare are nume de câmpuri și valori care corespund numelor de coloane și valorilor coloanelor care au fost combinate.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Combină coloanele specificate ale `table` într-o nouă coloană cu valori de înregistrări numită `newColumnName`, în care fiecare înregistrare are nume de câmpuri și valori care corespund numelor de coloane și valorilor coloanelor care au fost combinate. Dacă este specificată o înregistrare pentru `options`, pot fi furnizate următoarele opțiuni:

-   `DisplayNameColumn`: când este specificat ca text, indică faptul că numele de coloană dat trebuie tratat ca nume afișat al înregistrării. Acesta nu trebuie să fie una dintre coloanele din înregistrarea în sine.
-   `TypeName`: când este specificat ca text, furnizează un nume de tip logic pentru înregistrarea rezultată, care poate fi utilizat în timpul încărcării datelor pentru a dirija comportamentul conform cu mediul de încărcare.



## Category
Table.Transformation
