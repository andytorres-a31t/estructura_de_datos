mongo db Banco

db.clientes.insertMany([
  {
    cedula: "1104567890",
    nombre: "Ana Torres Vivanco",
    direccion: "Av. Universitaria y Av. Pío Jaramillo, Loja",
    telefono: "0991234567",
    correo: "ana.torres@email.com"
  },
  {
    cedula: "1107891234",
    nombre: "Carlos Jiménez Reyes",
    direccion: "Barrio San Cayetano, Loja",
    telefono: "0987654321",
    correo: "carlos.jimenez@email.com"
  },
  {
    cedula: "1102345678",
    nombre: "María Pinta Calva",
    direccion: "Sector Punzara, Loja",
    telefono: "0976543210",
    correo: "maria.pinta@email.com"
  }
]);
_______________________________________________________________________________________

db.usuarios.insertMany([
  {
    cedula: "1125469874",
    nombres: "Xavier Andrés",
    apellidos: "Soto Cruz",
    rol: "CAJERO"
  },
  {
    cedula: "1144785263",
    nombres: "Paola Estefanía",
    apellidos: "Vivanco Luna",
    rol: "ANALISTA_PRESTAMO"
  },
  {
    cedula: "1133698547",
    nombres: "Diego Fernando",
    apellidos: "Aguirre Paz",
    rol: "ANALISTA_INVERSION"
  }
]);

______________________________________________________________________________________
 
db.cuentas.insertMany([
  {
    numero_cuenta: "2211905811",
    cedula_cliente: "1104567890",
    tipo: "AHORROS",
    fecha_apertura: new Date("2023-05-10"),
    saldo_actual: 1540.75
  },
  {
    numero_cuenta: "2254896312",
    cedula_cliente: "1104567890",
    tipo: "CORRIENTE",
    fecha_apertura: new Date("2024-01-15"),
    saldo_actual: 320.00
  },
  {
    numero_cuenta: "2956845956",
    cedula_cliente: "1107891234",
    tipo: "AHORROS",
    fecha_apertura: new Date("2022-11-20"),
    saldo_actual: 980.50
  },
  {
    numero_cuenta: "2245781036",
    cedula_cliente: "1102345678",
    tipo: "CORRIENTE",
    fecha_apertura: new Date("2025-02-01"),
    saldo_actual: 75.20
  }
]); _______________________________________________________________________________________
db.transacciones.insertMany([
  {
    id_transaccion: "Trax-00010234",
    numero_cuenta: "2211905811",
    tipo_movimiento: "DEPOSITO",
    monto: 200.00,
    fecha_hora: new Date("2026-06-20T14:32:11Z"),
    medio: "1125469874"
  },
  {
    id_transaccion: "Trax-00010235",
    numero_cuenta: "2211905811",
    tipo_movimiento: "RETIRO",
    monto: 50.00,
    fecha_hora: new Date("2026-06-21T09:10:05Z"),
    medio: "1125469874"
  },
  {
    id_transaccion: "Trax-00010236",
    numero_cuenta: "2956845956",
    tipo_movimiento: "DEPOSITO",
    monto: 500.00,
    fecha_hora: new Date("2026-06-19T11:00:00Z"),
    medio: "1125469874"
  }
]);
_______________________________________________________________________________________

db.prestamos.insertMany([
  {
    id_prestamo: "PR-000045",
    cedula_cliente: "1104567890",
    cedula_analista: "1144785263",
    monto_aprobado: 5000.00,
    tasa_interes_anual: 12.5,
    plazo_meses: 12,
    fecha_concesion: new Date("2026-01-10"),
    estado: "ACTIVO"
  },
  {
    id_prestamo: "PR-000046",
    cedula_cliente: "1107891234",
    cedula_analista: "1144785263",
    monto_aprobado: 2000.00,
    tasa_interes_anual: 10.0,
    plazo_meses: 6,
    fecha_concesion: new Date("2026-04-01"),
    estado: "ACTIVO"
  }
]); 

_______________________________________________________________________________________

db.cuotas.insertMany([
  {
    numero_cuota: 1,
    fecha_vencimiento: new Date("2026-02-10"),
    valor_capital: 380.50,
    valor_interes: 52.08,
    seguro: 5.00,
    valor_total: 437.58,
    estado_pago: "PAGADO"
  },
  {
    numero_cuota: 2,
    fecha_vencimiento: new Date("2026-mysqldump -u tu_usuario -p nombre_de_la_base > respaldo.sql03-10"),
    valor_capital: 384.46,
    valor_interes: 48.12,
    seguro: 5.00,
    valor_total: 437.58,
    estado_pago: "PENDIENTE"
  },
  {
    numero_cuota: 1,
    fecha_vencimiento: new Date("2026-05-01"),
    valor_capital: 326.00,
    valor_interes: 16.67,
    seguro: 2.00,
    valor_total: 344.67,
    estado_pago: "PAGADO"
  }
]);
_______________________________________________________________________________________

db.polizas_inversion.insertMany([
  {
    id_poliza: "PZ-000089",
    cedula_cliente: "1104567890",
    cuenta_origen: "2211905811",
    cedula_analista: "1133698547",
    monto_invertido: 3000.00,
    tasa_interes_fija: 8.0,
    plazo_dias: 90,
    fecha_inicio: new Date("2026-03-01"),
    fecha_vencimiento: new Date("2026-05-30"),
    estado: "VIGENTE"
  },
  {
    id_poliza: "PZ-000090",
    cedula_cliente: "1102345678",
    cuenta_origen: "2245781036",
    cedula_analista: "1133698547",
    monto_invertido: 1500.00,
    tasa_interes_fija: 7.5,
    plazo_dias: 180,
    fecha_inicio: new Date("2026-01-15"),
    fecha_vencimiento: new Date("2026-07-14"),
    estado: "VIGENTE"
  },
  {
    id_poliza: "PZ-000091",
    cedula_cliente: "1107891234",
    cuenta_origen: "2956845956",
    cedula_analista: "1133698547",
    monto_invertido: 800.00,
    tasa_interes_fija: 6.0,
    plazo_dias: 30,
    fecha_inicio: new Date("2025-12-01"),
    fecha_vencimiento: new Date("2025-12-31"),
    estado: "LIQUIDADA"
  }
]);
