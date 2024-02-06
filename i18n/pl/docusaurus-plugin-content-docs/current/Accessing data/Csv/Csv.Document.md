---
title: Csv.Document
---

# Csv.Document


Zwraca zawartość dokumentu w formacie CSV jako tabelę.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Zwraca zawartość dokumentu CSV w postaci tabeli.    <ul>     <li>        Element <code>columns</code> może mieć wartość null, być liczbą kolumn, listą nazw kolumn, typem tabeli bądź rekordem opcji.      </li>      <li>        Element <code>delimiter</code> może być pojedynczym znakiem, listą znaków lub wartością <code>""</code>, która wskazuje, że wiersze powinny być dzielone kolejnymi białymi znakami. Wartość domyślna: <code>","</code>.      </li>      <li>        Zapoznaj się z właściwością <code>ExtraValues.Type</code>, aby uzyskać informacje dotyczące obsługiwanych wartości elementu <code>extraValues</code>.      </li>      <li>        Element <code>encoding</code> określa typ kodowania tekstu.      </li>    </ul>    Jeśli określono rekord dla elementu <code>columns</code> (a elementy <code>delimiter</code>, <code>extraValues</code> i <code>encoding</code> mają wartości null), mogą zostać podane następujące pola rekordu:    <ul>     <li>        <code>Delimiter</code>: ogranicznik kolumny. Wartość domyślna: <code>","</code>.      </li>      <li>        <code>Columns</code>: może mieć wartość null, być liczbą kolumn, listą nazw kolumn bądź typem tabeli. Jeśli liczba kolumn jest mniejsza od liczby odnalezionej w danych wejściowych, dodatkowe kolumny będą ignorowane. Jeśli liczba kolumn jest większa od liczby odnalezionej w danych wejściowych, dodatkowe kolumny będą miały wartość null. Gdy wartość nie zostanie podana, liczba kolumn zostanie określona na podstawie informacji odnalezionych w danych wejściowych.      </li>      <li>        <code>Encoding</code>: kodowanie tekstu w pliku. Wartość domyślna: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: określa sposób obsługi cudzysłowów.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (wartość domyślna): cudzysłowy w polu są istotne tylko wtedy, gdy występują bezpośrednio po ograniczniku.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: cudzysłowy w polu są zawsze istotne, niezależnie od miejsca ich występowania.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: określa sposób obsługi ujętych w cudzysłowy znaków podziału wiersza.        <ul>          <li>            <code>QuoteStyle.Csv</code> (wartość domyślna): ujęte w cudzysłowy znaki podziału wiersza są traktowane jako część danych, a nie koniec bieżącego wiersza.          </li>          <li>            <code>QuoteStyle.None</code>: wszystkie znaki podziału wiersza są traktowane jako koniec bieżącego wiersza, nawet jeśli występują one wewnątrz ujętej w cudzysłowy wartości.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Przetwórz tekst w formacie CSV z nagłówkami kolumn
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
