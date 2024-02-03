---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Combină coloanele specificate ale <code>table</code> într-o nouă coloană cu valori de înregistrări numită <code>newColumnName</code>, în care fiecare înregistrare are nume de câmpuri și valori care corespund numelor de coloane și valorilor coloanelor care au fost combinate. Dacă este specificată o înregistrare pentru <code>options</code>, pot fi furnizate următoarele opțiuni:    <ul>     <li> <code>DisplayNameColumn</code>: când este specificat ca text, indică faptul că numele de coloană dat trebuie tratat ca nume afișat al înregistrării. Acesta nu trebuie să fie una dintre coloanele din înregistrarea în sine. </li>     <li> <code>TypeName</code>: când este specificat ca text, furnizează un nume de tip logic pentru înregistrarea rezultată, care poate fi utilizat în timpul încărcării datelor pentru a dirija comportamentul conform cu mediul de încărcare. </li>    </ul>    



## Category
Table.Transformation
