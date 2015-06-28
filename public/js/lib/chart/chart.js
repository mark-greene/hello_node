var connect;

function chart(project_id, api_key) {
  connect = new Connect({
      projectId: project_id,
      apiKey: api_key
  });
}

function chart_purchase () {

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
}

function chart_page(pageTitle) {

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

function chart_sales(number) {

  for (var i = 1; i <= number; i++ ) {
    connect.push({
      "sales": [
        {
          customer: {
            firstName: 'Tom',
            lastName: 'Smith'
          },
          batch: i,
          product: '12 red roses',
          price: 34.95,
          time: moment()
        }
      ]
    });
  }
}

function chart_table3() {
  var query = connect.query('sales')
      .select({
      units: 'count',
      sales: { sum: 'price' }
  }).groupBy(['batch', 'product']);

  connect.table(query, '#sales-table3', {
    title: 'Sales',
    fields: {
      'batch': { label: 'Batch' },
      'product': { label: 'Product' },
      'units': { label: 'Units' },
      'sales': {
          label: 'Sales ($)',
          valueFormatter: dollarsFormatter
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
