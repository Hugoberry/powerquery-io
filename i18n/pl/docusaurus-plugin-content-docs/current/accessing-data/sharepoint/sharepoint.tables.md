---
title: SharePoint.Tables
---

# SharePoint.Tables


Zwraca tabelę zawierającą zawartość z listy programu SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz odpowiadający każdemu elementowi listy znalezionemu na określonej liście programu SharePoint <code>url</code>. Każdy wiersz zawiera właściwości listy. Parametr <code>options</code> pozwala określić następujące opcje:    <ul><li><code>ApiVersion</code> : Liczba (14 lub 15) albo tekst „Auto” określający wersję interfejsu API programu SharePoint do użycia dla tej witryny. Jeśli parametr nie zostanie określony, będzie używana wersja 14 interfejsu API. Jeśli podana zostanie wartość „Auto”, wersja serwera zostanie odnaleziona automatycznie, o ile to będzie możliwe, a w przeciwnym przypadku zostanie przyjęta domyślnie wersja 14. Nieanglojęzyczne witryny programu SharePoint wymagają co najmniej wersji 15.</li><li><code>Implementation</code> : Opcjonalne. Określa wersję łącznika programu SharePoint do użycia. Akceptowane wartości to „2.0” lub null. Jeśli wartość to „2.0”, używana jest implementacja 2.0 łącznika programu SharePoint. Jeśli wartość jest r&#243;wna null, używana jest oryginalna implementacja łącznika programu SharePoint.</li><li><code>ViewMode</code> : Opcjonalne. Ta opcja jest prawidłowa tylko dla implementacji 2.0. Akceptowane wartości to „Wszystkie” i „Domyślny”. Jeśli nie zostanie określona żadna wartość, zostanie ustawiona wartość „Wszystkie”. Po określeniu opcji „Wszystkie” widok zawiera wszystkie kolumny utworzone przez użytkownika i zdefiniowane przez system. Po określeniu opcji „Domyślny” widok będzie zgodny z tym, co użytkownik widzi podczas przeglądania listy w trybie online w dowolnym widoku ustawionym przez tego użytkownika jako domyślny w ustawieniach. Jeśli użytkownik edytuje domyślny widok w celu dodania lub usunięcia kolumn utworzonych przez użytkownika lub zdefiniowanych przez system albo przez utworzenie nowego widoku i ustawienie go jako domyślnego, te zmiany będą propagowane za pomocą łącznika.</li><li><code>DisableAppendNoteColumns</code> : Uniemożliwia łącznikowi używanie oddzielnego punktu końcowego dla kolumn notatek.</li></ul>    



## Category
Accessing data
