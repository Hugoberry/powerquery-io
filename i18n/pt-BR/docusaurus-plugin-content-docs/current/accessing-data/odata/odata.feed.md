---
title: OData.Feed
---

# OData.Feed


Retorna uma tabela de feeds OData oferecidos por um serviço OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Retorna uma tabela de feeds OData oferecidos por um serviço OData de um URI `serviceUri`, cabeçalhos `headers`. Um valor booleano especificando se desejar usar conexões simultâneas ou um parâmetro de registro opcional, `options`, pode ser especificado para controlar as seguintes opções:

-   `Consulta`: Adicione parâmetros de consulta ao URL de forma programática sem ter que se preocupar com o escape.
-   `Headers`: especificar esse valor como um registro fornecerá cabeçalhos adicionais para uma solicitação HTTP.
-   `ExcludedFromCacheKey`: especificar esse valor como uma lista excluirá essas chaves de cabeçalho HTTP de fazer parte do cálculo para armazenar dados em cache.
-   `ApiKeyName`: se o site de destino tiver uma noção de uma chave de API, esse parâmetro poderá ser usado para especificar o nome (não o valor) do parâmetro da chave que deverá ser usada na URL. O valor real da chave é fornecido na credencial.
-   `Timeout`: especificar esse valor como uma duração alterará o tempo limite de uma solicitação HTTP. O valor padrão é 600 segundos.
-   `EnableBatch`: uma lógica (true/false) que define se a geração de uma solicitação OData $batch deve ser excedida (o padrão é false).
-   `MaxUriLength`: um número que indica o comprimento máximo de um URI permitido enviado para um serviço OData. Se excedido e EnableBatch for true, a solicitação será feita para um ponto de extremidade OData $batch, caso contrário, falhará (o padrão é 2048).
-   `Concurrent`: uma lógica (true/false); quando definida como true, as solicitações para o serviço serão feitas simultaneamente. Quando definido como false, as solicitações serão feitas sequencialmente. Quando não for especificado, o valor será determinado pela anotação AsynchronousRequestsSupported do serviço. Se o serviço não especificar se AsynchronousRequestsSupported é suportado, as solicitações serão feitas sequencialmente.
-   `ODataVersion`: um número (3 ou 4) que especifica a versão do protocolo OData a ser usada para esse serviço OData. Quando não especificado, todas as versões suportadas serão solicitadas. A versão do serviço será determinada pelo cabeçalho OData-Version retornado pelo serviço.
-   `FunctionOverloads`: uma lógica (true/false); quando definida como true, as sobrecargas de importação de função serão listadas no navegador como entradas separadas. Quando definida como false, as sobrecargas de importação de função serão listadas como uma função de união no navegador. Valor padrão para V3: false. Valor padrão para V4: true.
-   `MoreColumns`: uma lógica (true/false); quando definida como true, adiciona uma coluna "Mais Colunas" a cada feed de entidade que contém tipos abertos e tipos polimórficos. Isso conterá os campos não declarados no tipo base. Quando falso, este campo não está presente. O padrão é falso.
-   `IncludeAnnotations`: uma lista separada por vírgulas de nomes de termos qualificados por namespace ou padrões a serem incluídos com "\*" como um caractere curinga. Por padrão, nenhuma das anotações está incluída.
-   `IncludeMetadataAnnotations`: uma lista separada por vírgulas de nomes de termos qualificados por namespace ou padrões a serem incluídos em solicitações de documentos de metadados, com "\*" como curinga. Por padrão, inclui as mesmas anotações que IncludeAnnotations.
-   `OmitValues`: permite que o serviço OData evite gravar determinados valores em respostas. Se reconhecido pelo serviço, inferiremos esses valores a partir dos campos omitidos. As opções incluem:
    -   `ODataOmitValues.Nulls`: permite que o serviço OData omita valores nulos.
-   `Implementation`: especifica a implementação do conector OData a ser usado. Os valores válidos são "2.0" ou nulo.


## Examples

### Example #1
Conecte-se ao serviço TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
