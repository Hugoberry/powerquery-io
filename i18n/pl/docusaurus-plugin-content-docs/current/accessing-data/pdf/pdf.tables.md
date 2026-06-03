---
title: Pdf.Tables
---

# Pdf.Tables


Zwraca dowolne tabele znalezione w pliku PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Zwraca wszystkie tabele znalezione w elemencie `pdf`. Opcjonalny parametr rekordu, `options`, może zostać podany, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `Implementation` : Wersja algorytmu, która ma być używana podczas identyfikowania tabel. Stare wersje są dostępne tylko w celu zapewnienia zgodności z poprzednimi wersjami, aby zapobiec uszkodzeniu starych zapytań przez aktualizacje algorytmów. Nowsza wersja powinna zawsze dawać najlepsze rezultaty. Prawidłowe wartości to „1.3”, „1.2”, „1.1” lub null.
-   `StartPage` : Określa pierwszą stronę w zakresie stron do zbadania. Wartość domyślna: 1.
-   `EndPage` : Określa ostatnią stronę w zakresie stron do zbadania. Wartość domyślna: ostatnia strona dokumentu.
-   `MultiPageTables` : Określa, czy podobne tabele na kolejnych stronach zostaną automatycznie połączone w jedną tabelę. Wartość domyślna: true.
-   `EnforceBorderLines` : Określa, czy linie obramowania są zawsze wymuszane jako granice komórek (w przypadku wartości true), czy po prostu używane jako jedna z wielu wskazówek przy określaniu granic komórek (w przypadku wartości false). Wartość domyślna: false.


## Examples

### Example #1
Zwraca tabele zawarte w pliku sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Uzyskiwanie dostępu do danych
