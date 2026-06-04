---
title: List.LastN
---

# List.LastN


Atgriež saraksta pēdējo vienumu vai vienumus. Varat papildus norādīt atgriežamo vērtību skaitu vai kvalifikācijas nosacījumu.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Atgriež sarakstu ar pēdējo vienu vai vairākām vienībām norādītajā sarakstā.

-   `list`: saraksts, kas jāizpēta. Ja saraksts ir tukšs, tiek atgriezts tukšs saraksts.
-   `countOrCondition`: (Neobligāti) Atbalsta vairāku vienību apkopošanu vai vienību filtrēšanu. Lai gan šis parametrs ir norādīts kā neobligāts, kļūda rodas, ja šī vērtība netiek norādīta vai ir `null`. Šo parametru var norādīt divos veidos:
    -   Ja ir norādīts skaitlis, tiek noņemts ne vairāk kā tik daudz vienumu.
    -   Ja ir norādīts nosacījums, tiek atgriezti visi vienumi, kas atbilst nosacījumam, sākot no saraksta beigām. Kad vienums neatbilst nosacījumam, turpmākie vienumi netiek ņemti vērā.


## Examples

### Example #1
Iegūstiet saraksta \{3, 4, 5, -1, 7, 8, 2\} pēdējo vērtību.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Iegūstiet saraksta \{3, 4, 5, -1, 7, 8, 2\} pēdējās vērtības, kas ir lielākas par 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
