---
title: Function.ScalarVector
---

# Function.ScalarVector


Tworzy funkcję skalarną opartą na funkcji wektorowej, konstruując partię z wielu wywołań.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Zwraca funkcję skalarną typu <code>scalarFunctionType</code>, która wywołuje funkcję <code>vectorFunction</code> z pojedynczym wierszem argumentów i zwraca dla niej pojedynczą wartość wyjściową. Ponadto wielokrotne zastosowanie funkcji skalarnej dla każdego wiersza tabeli danych wejściowych, takiej jak Table.AddColumn, spowoduje zamiast tego jednokrotne zastosowanie funkcji <code>vectorFunction</code> dla wszystkich danych wejściowych. <br />Do funkcji <code>vectorFunction</code> zostanie przekazana tabela, której kolumny pasują do parametrów typu <code>scalarFunctionType</code> ze względu na nazwę i pozycję. Każdy wiersz tej tabeli zawiera argumenty dla jednego wywołania funkcji skalarnej, przy czym kolumny odpowiadają parametrom typu <code>scalarFunctionType</code>. <br />Funkcja <code>vectorFunction</code> musi zwracać listę tej samej długości co tabela wejściowa, a każdy element tej listy musi mieć taki sam wynik jak wynik obliczenia funkcji skalarnej dla wiersza wejściowego w odpowiadającym położeniu. <br />Oczekuje się, że tabela wejściowa będzie przesyłana strumieniowo, więc oczekuje się także, że funkcja <code>vectorFunction</code> będzie przesyłać strumieniowo dane wyjściowe w miarę nadsyłania danych wejściowych, przetwarzając w danym czasie tylko jeden fragment danych wejściowych. W szczególności funkcja <code>vectorFunction</code> nie może iterować swojej tabeli wejściowej więcej niż raz.<br />



## Category
Function
