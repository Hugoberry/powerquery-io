---
title: SharePoint.Files
---

# SharePoint.Files


Zwraca tabelę zawierającą dokumenty z witryny programu SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą wiersz odpowiadający każdemu dokumentowi znalezionemu w określonej witrynie programu SharePoint `url` oraz podfolderach. Każdy wiersz zawiera właściwości folderu lub pliku oraz link do jego zawartości. Parametr `options` pozwala określić następujące opcje:

-   `ApiVersion` : Liczba (14 lub 15) albo tekst „Auto” określający wersję interfejsu API programu SharePoint do użycia dla tej witryny. Jeśli parametr nie zostanie określony, będzie używana wersja 14 interfejsu API. Jeśli podana zostanie wartość „Auto”, wersja serwera zostanie odnaleziona automatycznie, o ile to będzie możliwe, a w przeciwnym przypadku zostanie przyjęta domyślnie wersja 14. Nieanglojęzyczne witryny programu SharePoint wymagają co najmniej wersji 15.



## Category
Accessing data
