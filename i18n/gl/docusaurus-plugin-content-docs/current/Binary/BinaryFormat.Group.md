---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Devolve un formato binario que le un grupo de elementos.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Details

Os parámetros son os seguintes:<ul><li>O parámetro <code>binaryFormat</code> especifica o formato binario do valor de clave.</li><li>O parámetro <code>group</code> fornece información sobre o grupo de elementos coñecidos.</li><li>O parámetro opcional <code>extra</code> pódese utilizar para especificar a función que vai devolver un valor de formato binario para o valor que segue a calquera clave que non se esperaba.  Se non se especifica o parámetro <code>extra</code>, xérase un erro se hai valores de claves inesperados.</li></ul>O parámetro <code>group</code> especifica unha lista de definicións de elementos.  Cada definición de elemento é unha lista, que contén de 3 a 5 valores, da maneira seguinte:<ul><li>Valor de clave.  O valor de clave que corresponde ao elemento.  Debe ser único dentro do conxunto de elementos.</li><li>Formato do elemento.  O formato binario correspondente ao valor do elemento.  Isto permite a cada elemento ter un formato diferente. </li><li>Ocorrencia do elemento.  O valor <code>BinaryOccurrence.Type</code> do número de veces que se espera que o elemento apareza no grupo.   Os elementos requiridos que non están presentes provocan un erro.  Os elementos duplicados opcionais ou requiridos contrólanse como valores de claves inesperados.</li><li>Valor do elemento predefinido (opcional).  Se o valor do elemento predefinido aparece na lista de definición de elementos e non é nulo, entón utilizarase en vez do predefinido.  O predefinido para os elementos opcionais ou repetidos é nulo e o predefinido para os valores repetidos é unha lista baleira \{ }.</li><li>Transformación do valor do elemento (opcional).   Se a función de transformación do valor do elemento está presente na lista de definición de elementos e non é nula, entón chamarase para transformar o valor do elemento antes de devolvelo.  A función de transformación só se chama se o elemento aparece na entrada (nunca se chamará co valor predefinido). </li></ul>


## Examples

### Example #1 
O seguinte asume un valor de clave que é un byte único, con 4 elementos esperados no grupo, onde todos teñen un byte de datos despois da clave.  Os elementos aparecen na entrada da maneira seguinte:&lt;ul&gt;&lt;li&gt;A clave 1 é obrigatoria e aparece co valor 11.&lt;/li&gt;&lt;li&gt;A clave 2 repítese, aparece dúas veces co valor 22 e produce como resultado un valor de \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;A clave 3 é opcional, non aparece e produce como resultado un valor de nulo.&lt;/li&gt;&lt;li&gt;A clave 4 repítese, mais non aparece e produce como resultado un valor de \{ }.&lt;/li&gt;&lt;li&gt;A clave 5 non forma parte do grupo, mais aparece unha vez co valor 55.  A función adicional chámase co valor da clave 5 e devolve o formato correspondente a ese valor (BinaryFormat.Byte).  O valor 55 é lido e rexeitado.&lt;/li&gt;&lt;/ul&gt;
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2 
O exemplo a seguir mostra a transformación de valor do elemento e o valor do elemento predefinido.   O elemento de repetición coa clave 1 suma a lista de valores lidos usando List.Sum.  O elemento opcional coa clave 2 ten un valor predefinido de 123, en vez de nulo.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
