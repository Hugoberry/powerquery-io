---
title: Number.From
---

# Number.From


No norādītās vērtības tiek izveidots skaitlis.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Atgriež tipa `number` vērtību, kas ir iegūta no norādītās vērtības `value`. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV"). Ja norādītā vērtība `value` ir `Null`, funkcija `Number.From` atgriež vērtību `Null`. Ja norādītās vērtības `value` tips ir `number`, tiek atgriezta vērtība `value`. Par tipa `number` vērtību var pārvērst tālāk norādīto tipu vērtības.

-   `text`: `number` vērtība no teksta atveidojuma. Var apstrādāt parastos teksta formātus (15, 3,423.10, 5,0E-10). Papildinformāciju skatiet sadaļā `Number.FromText`.
-   `logical`: vērtībai `True` atbilst skaitlis 1, bet vērtībai `False` — skaitlis 0.
`value`-   `datetime`: dubultprecizitātes peldošā komata skaitlis, kurā ir ietverts OLE automatizācijas datuma ekvivalents.
-   `datetimezone`: dubultprecizitātes peldošā komata skaitlis, kurā ir ietverts vietējā datuma un laika OLE automatizācijas datuma ekvivalents.
-   `date`: dubultprecizitātes peldošā komata skaitlis, kurā ir ietverts OLE automatizācijas datuma ekvivalents.
-   `time`: vērtība ir izteikta dienas daļās.
`value`-   `duration`: vērtība ir izteikta veselās dienās un dienas daļās.

Ja vērtībai ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1
Iegūstiet `number` vērtību no vērtības `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Iegūstiet tipa `number` vērtību no vērtības `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Iegūstiet izteiksmes `"12.3%"` vērtību `number`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
