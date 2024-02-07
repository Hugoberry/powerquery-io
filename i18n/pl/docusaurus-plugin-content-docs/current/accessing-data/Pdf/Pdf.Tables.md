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

Zwraca wszystkie tabele znalezione w elemencie <code>pdf</code>. Opcjonalny parametr rekordu, <code>options</code>, może zostać podany, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:    <ul><li><code>Implementation</code> : Wersja algorytmu, kt&#243;ra ma być używana podczas identyfikowania tabel. Stare wersje są dostępne tylko w&#160;celu zapewnienia zgodności z poprzednimi wersjami, aby zapobiec uszkodzeniu starych zapytań przez aktualizacje algorytm&#243;w. Nowsza wersja powinna zawsze dawać najlepsze rezultaty. Prawidłowe wartości to „1.3”, „1.2”, „1.1” lub null.</li><li><code>StartPage</code> : Określa pierwszą stronę w zakresie stron do zbadania. Wartość domyślna: 1.</li><li><code>EndPage</code> : Określa ostatnią stronę w zakresie stron do zbadania. Wartość domyślna: ostatnia strona dokumentu.</li><li><code>MultiPageTables</code> : Określa, czy podobne tabele na kolejnych stronach zostaną automatycznie połączone w jedną tabelę. Wartość domyślna: true.</li><li><code>EnforceBorderLines</code> : Określa, czy linie obramowania są zawsze wymuszane jako granice kom&#243;rek (w przypadku wartości true), czy po prostu używane jako jedna z wielu wskaz&#243;wek przy określaniu granic kom&#243;rek (w przypadku wartości false). Wartość domyślna: false.</li></ul>    


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
