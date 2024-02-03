---
title: BinaryFormat.Group
---

# BinaryFormat.Group


## Description

Devuelve un formato binario que lee un grupo de elementos.


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

Los parámetros son los siguientes:<ul><li>El parámetro <code>binaryFormat</code> especifica el formato binario del valor de clave.</li><li>El parámetro <code>group</code> proporciona información sobre el grupo de elementos conocidos.</li><li>El parámetro opcional <code>extra</code> puede utilizarse para especificar una función que devolverá un valor de formato binario para el valor seguido de cualquier clave inesperada.  Si el parámetro <code>extra</code> no está especificado, entonces se producirá un error si existen valores de clave inesperados.</li></ul>El parámetro <code>group</code> especifica una lista de definiciones de elementos.  Cada definición de elemento es una lista que contiene 3-5 valores, según lo indicado a continuación:<ul><li>Valor de clave.  El valor de la clave que se corresponde con el elemento.  Debe ser único dentro del conjunto de elementos.</li><li>Formato de elemento.  El formato binario que se corresponde con el valor del elemento.  Esto permite que cada elemento tenga un formato distinto. </li><li>Repetición del elemento.  El valor <code>BinaryOccurrence.Type</code> con el número de veces que se espera que aparezca el elemento en el grupo.   Los elementos requeridos que no están presentes provocan un error.  Los elementos duplicados requeridos u opcionales se tratan como valores de clave imprevistos.</li><li>Valor predeterminado del elemento (opcional).  Si el valor predeterminado del elemento aparece en la lista de definiciones de elementos y no es nulo, entonces se empleará este en lugar del valor predeterminado.  El valor predeterminado para elementos repetidos u opcionales es nulo y el valor predeterminado para valores repetidos es una lista vacía \{ }.</li><li>Transformación de valores de elementos (opcional).   Si la función de transformación de valores de elementos está presente en la lista de definiciones de elementos y no es nula, entonces se llamará a esta función para transformar el valor del elemento antes de que sea devuelto.  Solo se llamará a la función de transformación si el elemento aparece en la entrada (nunca será llamada con el valor predeterminado). </li></ul>


## Examples

### Example #1 
Lo siguiente asume un valor de clave que es un byte individual, con 4 elementos esperados en el grupo, todos ellos con un byte de datos después de la clave.  El elemento aparece en la entrada del modo indicado a continuación:&lt;ul&gt;&lt;li&gt;La clave 1 se requiere y no aparece con valor 11.&lt;/li&gt;&lt;li&gt;La clave 2 se repite y aparece dos veces con valor 22 y da como resultado un valor de \{ 22, 22 }.&lt;/li&gt;&lt;li&gt;La clave 3 es opcional y no aparece y da como resultado un valor de nulo.&lt;/li&gt;&lt;li&gt;La clave 4 se repite, pero no aparece, y da como resultado un valor de \{ }.&lt;/li&gt;&lt;li&gt;La clave 5 no es parte del grupo, pero aparece una vez con valor 55.  A la función extra se llama con el valor de clave 5 y devuelve el formato correspondiente a ese valor (BinaryFormat.Byte).  El valor 55 está leído y descartado.&lt;/li&gt;&lt;/ul&gt;
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
El siguiente ejemplo muestra la transformación del valor del elemento y el valor predeterminado del elemento.   El elemento repetido con la clave 1 suma la lista de valores leídos utilizando List.Sum.  El elemento opcional con clave 2 tiene un valor predeterminado de 123 en lugar de nulo.
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
