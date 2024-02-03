---
title: OData.Feed
---

# OData.Feed


## Description

Retorna uma tabela de feeds OData oferecidos por um serviço OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Retorna uma tabela de feeds OData oferecidos por um serviço OData de um URI <code>serviceUri</code>, cabeçalhos <code>headers</code>. Um valor booleano especificando se desejar usar conexões simultâneas ou um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:    <ul>    <li><code>Consulta</code>: Adicione parâmetros de consulta ao URL de forma programática sem ter que se preocupar com o escape. </li>    <li> <code>Cabeçalhos</code>: Especificar esse valor como um registro fornecerá cabeçalhos adicionais para uma solicitação HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: Especificar esse valor como uma lista excluirá essas chaves de cabeçalho HTTP de fazer parte do cálculo para armazenar dados em cache.</li>    <li> <code>ApiKeyName</code>: Se o site de destino tiver uma noção de uma chave de API, este parâmetro pode ser usado para especificar o nome (não o valor) do parâmetro de chave que deve ser usado no URL. O valor real da chave é fornecido na credencial.</li>    <li> <code>Tempo limite</code>: Especificar esse valor como uma duração alterará o tempo limite para uma solicitação HTTP. O valor padrão é 600 segundos.</li>    <li> <code>EnableBatch</code>: Um lógico (true/false) que define se deve permitir a geração de uma solicitação OData $batch se o MaxUriLength for excedido (o padrão é false).</li>    <li> <code>MaxUriLength</code>: um número que indica o comprimento máximo de um URI permitido enviado para um serviço OData. Se excedido e EnableBatch for true, a solicitação será feita para um ponto de extremidade OData $batch, caso contrário, falhará (o padrão é 2048).</li>    <li> <code>Simultâneo</code>: Uma lógica (true/false) quando definido como true, as solicitações para o serviço serão feitas simultaneamente. Quando definido como false, as solicitações serão feitas sequencialmente. Quando não especificado, o valor será determinado pela anotação AsynchronousRequestsSupported do serviço. Se o serviço não especificar se AsynchronousRequestsSupported é suportado, as solicitações serão feitas sequencialmente.</li>    <li> <code>ODataVersion</code>: Um número (3 ou 4) que especifica a versão do protocolo OData a ser usado para este serviço OData. Quando não especificado, todas as versões suportadas serão solicitadas. A versão do serviço será determinada pelo cabeçalho OData-Version retornado pelo serviço.</li>    <li> <code>FunctionOverloads</code>: Uma lógica (true/false) quando definida como true, sobrecargas de importação de função serão listadas no navegador como entradas separadas, quando definida como false, as sobrecargas de importação de função serão listadas como uma função de união no navegador. Valor padrão para V3: false. Valor padrão para V4: true.</li>    <li> <code>MoreColumns</code>: Uma lógica (true/false) quando definida como true, adiciona uma coluna "Mais Colunas" a cada feed de entidade contendo tipos abertos e tipos polimórficos. Isso conterá os campos não declarados no tipo base. Quando falso, este campo não está presente. O padrão é falso.</li>    <li> <code>IncludeAnnotations</code>: Uma lista separada por vírgulas de padrões ou termos qualificados de namespaces para incluir com "\*" como curinga. Por padrão, nenhuma das anotações está incluída.</li>    <li> <code>IncludeMetadataAnnotations</code>: Uma lista separada por vírgulas de padrões ou termos qualificados de namespaces para incluir em solicitações de documentos de metadados, com "\*" como curinga. Por padrão, inclui as mesmas anotações que IncludeAnnotations.</li>    <li> <code>OmitValues</code>: Permite que o serviço OData evite escrever certos valores nas respostas. Se reconhecido pelo serviço, inferiremos esses valores a partir dos campos omitidos. As opções incluem:      <ul>        <li><code>ODataOmitValues.Nulls</code>: Permite que o serviço OData omita valores nulos.</li>      </ul>    </li>    <li> <code>Implementação</code>: Especifica a implementação do conector OData a ser usado. Os valores válidos são "2.0" ou nulo.</li>    </ul>


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
