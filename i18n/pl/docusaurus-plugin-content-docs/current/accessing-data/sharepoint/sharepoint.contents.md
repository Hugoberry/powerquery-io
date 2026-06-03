---
title: SharePoint.Contents
---

# SharePoint.Contents


Zwraca tabelę zawierającą zawartość z witryny programu SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz odpowiadający każdemu folderowi i dokumentowi znalezionemu w podanej witrynie programu SharePoint `url`. Każdy wiersz zawiera właściwości folderu lub pliku oraz link do jego zawartości. Parametr `options` pozwala określić następujące opcje:

-   `ApiVersion` : Liczba (14 lub 15) albo tekst „Auto” określający wersję interfejsu API programu SharePoint do użycia dla tej witryny. Jeśli parametr nie zostanie określony, będzie używana wersja 14 interfejsu API. Jeśli podana zostanie wartość „Auto”, wersja serwera zostanie odnaleziona automatycznie, o ile to będzie możliwe, a w przeciwnym przypadku zostanie przyjęta domyślnie wersja 14. Nieanglojęzyczne witryny programu SharePoint wymagają co najmniej wersji 15.
-   `Implementation` : Opcjonalne. Określa wersję łącznika programu SharePoint do użycia. Akceptowane wartości to „2.0” lub null. Jeśli wartość to „2.0”, używana jest implementacja 2.0 łącznika programu SharePoint. Jeśli wartość jest równa null, używana jest oryginalna implementacja łącznika programu SharePoint.



## Category
Accessing data
