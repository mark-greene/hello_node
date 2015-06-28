var connect = new Connect({
    projectId: '558a0f311f2ddd0bf4ebcd97',
    apiKey: '6841F495474A544129FB2863052A6D79-4E3B903581BC90BCC9190E56441063E35DE54B1316E2C825DBC2D644359D265051F2D8B245DA2FC8B03F72F64582BB49'
});

function chart_purchase (pageTitle) {

  connect.push('purchases', [
    {
      name: 'Phone',
      price: 465.55
    },
    {
      name: 'Case',
      price: 5.55
    },
    {
      name: 'Screen Saver',
      price: 2.55
    },
    {
      name: 'Car Kit',
      price: 65.55
    },
    {
      name: 'Charger',
      price: 45.55
    }
  ]);

  connect.push({
    'app': [
      {
        name: pageTitle,
        location: 'Phoenix'
      }
    ],
    'metadata': [
      {
        type: 'Jenny',
        total: 8675309
      }
    ]
  });
}

var dollarsFormatter = function (value) {
    return numeral(value).format('$0.00');
};

function chart_text() {
  var query = connect.query('purchases')
      .select({
          sales: { sum: 'price' }
      });

  connect.text(query, '#sales-text', {
      title: 'Total Sales ($)',
      fields: {
          sales: {
              valueFormatter: dollarsFormatter
          }
      }
  });
}

function chart_bar() {
  var query = connect.query('purchases')
      .select({
      units: 'count'
  }).groupBy(['name']);

  var palette = {
      Charger: '#1ABC9C',
      Phone: '#3498DB',
      Case: '#E74C3C',
      'Car Kit': '#9B59B6',
      'Screen Saver': '#F39C12'
  };

  connect.chart(query, '#sales-bar', {
      title: 'Total Sales (Units)',
      chart: {
          type: 'bar',
          colorModifier: function(currentcolor, charDataContext){
              var groupByValue = charDataContext.groupByValues[0];

              return palette[groupByValue];
          },
          showLegend: false
      }
  });
}

function chart_table() {
  var query = connect.query('purchases')
      .select({
      units: 'count',
      sales: {
          sum: 'price'
      }
  }).groupBy(['name']);

  connect.table(query, '#sales-table', {
      title: 'Sales',
      fields: {
              'name': {
              label: 'Item'
          },
              'units': {
              label: 'Sales (Units)'
          },
              'sales': {
              label: 'Sales ($)',
              valueFormatter: dollarsFormatter
          }
      }
  });
}

function chart_table2() {
  var query = connect.query('app')
      .select({
      units: 'count',
  }).groupBy(['name']);

  connect.table(query, '#sales-table2', {
      title: 'Pages',
      fields: {
              'name': {
              label: 'Page'
          },
              'units': {
              label: 'Hits'
          }
      }
  });
}

function chart_area() {
  var query = connect.query('purchases')
      .select({
      units: 'count'
  }).groupBy(['name'])
      .interval('daily');

  connect.chart(query, '#sales-area', {
      title: 'Sales (Units)',
      chart: {
          type: 'area-spline'
      }
  });
}
