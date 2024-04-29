const preguntasMomentaneas = [
    {
        pregunta: '¿Cuál es el río más largo del mundo?',
        opciones: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
        respuesta: 'Amazonas'
    },
    {
        pregunta: '¿Quién pintó la Mona Lisa?',
        opciones: ['Pablo Picasso', 'Vincent van Gogh', 'Claude Monet', 'Leonardo da Vinci'],
        respuesta: 'Leonardo da Vinci'
    },
    {
        pregunta: '¿Cuál es el metal más abundante en la corteza terrestre?',
        opciones: ['Hierro', 'Aluminio', 'Cobre', 'Oro'],
        respuesta: 'Aluminio'
    },
    {
        pregunta: '¿Cuál es el océano más grande del mundo?',
        opciones: ['Pacífico', 'Atlántico', 'Índico', 'Antártico'],
        respuesta: 'Pacífico'
    },
    {
        pregunta: '¿En qué año llegó Cristóbal Colón a América?',
        opciones: ['1501', '1510', '1492', '1525'],
        respuesta: '1492'
    },
    {
        pregunta: '¿Quién escribió "Don Quijote de la Mancha"?',
        opciones: ['Garcilaso de la Vega','Miguel de Cervantes', 'Lope de Vega', 'Federico García Lorca'],
        respuesta: 'Miguel de Cervantes'
    },
    {
        pregunta: '¿Cuál es el país más poblado del mundo?',
        opciones: ['China', 'India', 'Estados Unidos', 'Rusia'],
        respuesta: 'China'
    },
    {
        pregunta: '¿Quién fue el primer hombre en pisar la luna?',
        opciones: ['Buzz Aldrin', 'Yuri Gagarin', 'John Glenn', 'Neil Armstrong'],
        respuesta: 'Neil Armstrong'
    },
    {
        pregunta: '¿En qué ciudad se encuentra la Torre Eiffel?',
        opciones: ['Londres', 'Nueva York', 'París',  'Roma'],
        respuesta: 'París'
    },
    {
        pregunta: '¿Cuál es la capital de Australia?',
        opciones: ['Camberra', 'Sídney', 'Melbourne', 'Brisbane'],
        respuesta: 'Camberra'
    },
    {
        pregunta: '¿Cuál es el metal más pesado que se encuentra en estado líquido a temperatura ambiente?',
        opciones: ['Mercurio', 'Plomo', 'Uranio', 'Estaño'],
        respuesta: 'Mercurio'
    },
    {
        pregunta: '¿Quién fue el primer presidente de Estados Unidos?',
        opciones: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Abraham Lincoln'],
        respuesta: 'George Washington'
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        opciones: ['Toronto', 'Montreal', 'Vancouver', 'Ottawa'],
        respuesta: 'Ottawa'
    },
    {
        pregunta: '¿Cuál es el hueso más largo del cuerpo humano?',
        opciones: ['Tibia', 'Fémur', 'Húmero', 'Fibula'],
        respuesta: 'Fémur'
    },
    {
        pregunta: '¿Quién escribió "Hamlet"?',
        opciones: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Fyodor Dostoevsky'],
        respuesta: 'William Shakespeare'
    },
    {
        pregunta: '¿Cuál es el continente más pequeño del mundo?',
        opciones: ['Europa', 'Antártida', 'Oceanía', 'América'],
        respuesta: 'Antártida'
    },
    {
        pregunta: '¿Cuál es el animal más rápido del mundo?',
        opciones: ['Leopardo', 'Guepardo', 'León', 'Tigre'],
        respuesta: 'Guepardo'
    },
    {
        pregunta: '¿Quién pintó "La noche estrellada"?',
        opciones: ['Salvador Nasrralla', 'Pablo Picasso', 'Vincent van Gogh',  'Leonardo da Vinci'],
        respuesta: 'Vincent van Gogh'
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo por área terrestre?',
        opciones: ['Canadá', 'Estados Unidos', 'Rusia',  'China'],
        respuesta: 'Rusia'
    },
    {
        pregunta: '¿Cuál es el monte más alto del mundo?',
        opciones: ['Monte Kilimanjaro', 'Monte Everest', 'Monte Aconcagua', 'Monte McKinley'],
        respuesta: 'Monte Everest'
    },
    {
        pregunta: '¿Quién escribió "Cien años de soledad"?',
        opciones: ['Mario Vargas Llosa', 'Julio Cortázar', 'Jorge Luis Borges', 'Gabriel García Márquez'],
        respuesta: 'Gabriel García Márquez'
    },
    {
        pregunta: '¿Cuál es el metal más caro del mundo?',
        opciones: ['Oro', 'Platino', 'Rodio', 'Paladio'],
        respuesta: 'Rodio'
    },
    {
        pregunta: '¿Cuál es el país más pequeño del mundo?',
        opciones: ['Ciudad del Vaticano', 'Mónaco', 'San Marino', 'Nauru'],
        respuesta: 'Ciudad del Vaticano'
    },
    {
        pregunta: '¿Quién fue el primer emperador romano?',
        opciones: ['César Augusto', 'Julio César', 'Nerón', 'Trajano'],
        respuesta: 'César Augusto'
    },
    {
        pregunta: '¿Cuál es el río más largo de Europa?',
        opciones: ['Danubio', 'Volga',  'Rin', 'Támesis'],
        respuesta: 'Volga'
    },
    {
        pregunta: '¿Quién fue el primer hombre en orbitar la Tierra?',
        opciones: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'],
        respuesta: 'Yuri Gagarin'
    },
    {
        pregunta: '¿Cuál es el gas más abundante en la atmósfera terrestre?',
        opciones: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno',  'Argón'],
        respuesta: 'Nitrógeno'
    },
    {
        pregunta: '¿En qué año terminó la Segunda Guerra Mundial?',
        opciones: ['1942', '1945',  '1950', '1939'],
        respuesta: '1945'
    },
    {
        pregunta: '¿Cuál es el país más visitado del mundo?',
        opciones: ['España', 'Estados Unidos', 'Francia', 'China'],
        respuesta: 'Francia'
    },
    {
        pregunta: '¿Quién es el CEO de Tesla?',
        opciones: ['Jeff Bezos', 'Mark Zuckerberg', 'Elon Musk', 'Tim Cook'],
        respuesta: 'Elon Musk'
    },
    {
        pregunta: '¿Qué significa "HTML" en informática?',
        opciones: ['Lenguaje de Marcado de Hipertexto', 'Hojas de Estilo en Cascada', 'Lenguaje de Programación', 'Base de Datos Relacional'],
        respuesta: 'Lenguaje de Marcado de Hipertexto'
    },
    {
        pregunta: '¿Cuál de las siguientes empresas no se dedica principalmente a la fabricación de smartphones?',
        opciones: ['Samsung', 'Microsoft', 'Apple', 'Huawei'],
        respuesta: 'Microsoft'
    },
    {
        pregunta: '¿Qué empresa desarrolló el primer microprocesador comercial?',
        opciones: [ 'AMD', 'IBM', 'NVIDIA', 'Intel'],
        respuesta: 'Intel'
    },
    {
        pregunta: '¿Cuál de las siguientes redes sociales fue lanzada primero?',
        opciones: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
        respuesta: 'Facebook'
    },
    {
        pregunta: '¿Qué significa "PDF" en informática?',
        opciones: [ 'Documento de Formato Personal', 'Portador de Datos Fiable', 'Firma Digital Personal', 'Formato de Documento Portátil'],
        respuesta: 'Formato de Documento Portátil'
    },
    {
        pregunta: '¿Quién es el fundador de Microsoft?',
        opciones: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
        respuesta: 'Bill Gates'
    },
    {
        pregunta: '¿Qué es un SSD?',
        opciones: ['Unidad de Estado Sólido', 'Disco Duro Externo', 'Tarjeta de Sonido Digital', 'Software de Seguridad y Defensa'],
        respuesta: 'Unidad de Estado Sólido'
    },
    {
        pregunta: '¿Cuál es el sistema operativo desarrollado por Apple para sus dispositivos móviles?',
        opciones: ['Android', 'Windows', 'iOS', 'Linux'],
        respuesta: 'iOS'
    },
    {
        pregunta: '¿Qué empresa desarrolló el navegador web Chrome?',
        opciones: ['Mozilla', 'Google', 'Microsoft', 'Apple'],
        respuesta: 'Google'
    },
    {
        pregunta: '¿Qué significa "URL" en informática?',
        opciones: ['Unidad de Red Local', 'Localizador Uniforme de Recursos', 'Ubicación Real del Archivo', 'Unión de Redes Locales'],
        respuesta: 'Localizador Uniforme de Recursos'
    },
    {
        pregunta: '¿Cuál es el nombre del primer satélite artificial lanzado al espacio?',
        opciones: ['Vostok 1', 'Explorer 1', 'Telstar 1', 'Sputnik 1'],
        respuesta: 'Sputnik 1'
    },
    {
        pregunta: '¿Qué significa "USB" en informática?',
        opciones: ['Unidad de Sistema Básico', 'Bus Universal en Serie', 'Unidad de Seguridad Biométrica', 'Unidad de Sistema de Bloques'],
        respuesta: 'Bus Universal en Serie'
    },
    {
        pregunta: '¿Qué empresa desarrolló el sistema operativo Windows?',
        opciones: ['Apple', 'Linux',  'Microsoft','Google'],
        respuesta: 'Microsoft'
    },
    {
        pregunta: '¿Cuál de las siguientes tecnologías de comunicación es inalámbrica?',
        opciones: ['Bluetooth', 'Ethernet', 'Fibra Óptica', 'DSL'],
        respuesta: 'Bluetooth'
    },
    {
        pregunta: '¿Qué es un algoritmo?',
        opciones: ['Un conjunto de instrucciones para resolver un problema', 'Un tipo de virus informático', 'Un dispositivo de almacenamiento de datos', 'Un programa de diseño gráfico'],
        respuesta: 'Un conjunto de instrucciones para resolver un problema'
    },
    {
        pregunta: '¿Qué es la inteligencia artificial?',
        opciones: ['Un tipo de lenguaje de programación', 'Un nuevo tipo de procesador', 'La capacidad de las máquinas para simular el pensamiento humano', 'Una técnica de diseño de hardware'],
        respuesta: 'La capacidad de las máquinas para simular el pensamiento humano'
    },
    {
        pregunta: '¿Qué significa "VPN" en informática?',
        opciones: ['Verificación de Protocolo de Red', 'Red Privada Virtual', 'Vista Previa en Red', 'Vínculo de Puntos de Red'],
        respuesta: 'Red Privada Virtual'
    },
    {
        pregunta: '¿Qué es un firewall?',
        opciones: ['Un dispositivo de almacenamiento de datos', 'Un sistema de seguridad que controla el tráfico de red',  'Un tipo de pantalla táctil', 'Un programa de edición de imágenes'],
        respuesta: 'Un sistema de seguridad que controla el tráfico de red'
    },
    {
        pregunta: '¿Qué empresa desarrolló el primer microprocesador de 1 GHz?',
        opciones: ['Intel', 'AMD', 'IBM', 'NVIDIA'],
        respuesta: 'Intel'
    },
    {
        pregunta: '¿Qué es un dominio de internet?',
        opciones: ['Una dirección única que identifica a un sitio web en la red', 'Un tipo de servidor de correo electrónico', 'Un programa de mensajería instantánea', 'Un tipo de enlace de red'],
        respuesta: 'Una dirección única que identifica a un sitio web en la red'
    },
    {
        pregunta: '¿Qué significa "HTTP" en informática?',
        opciones: ['Alto Tráfico de Red', 'Herramienta de Transferencia de Paquetes', 'Protocolo de Transferencia de Hipertexto',  'Historia de Transferencia de Páginas'],
        respuesta: 'Protocolo de Transferencia de Hipertexto'
    },
    {
        pregunta: '¿Cuál es el nombre del primer ordenador personal comercializado?',
        opciones: ['Altair 8800', 'IBM PC', 'Apple I', 'Commodore PET'],
        respuesta: 'Altair 8800'
    },
    {
        pregunta: '¿Cuál es el significado de "GPS" en inglés?',
        opciones: ['Señal de Posicionamiento Geoespacial', 'Sistema de Proyección Geográfica', 'Sistema de Posicionamiento Global', 'Sistema de Posicionamiento Global'],
        respuesta: 'Sistema de Posicionamiento Global'
    },
    {
        pregunta: '¿Qué es un ISP?',
        opciones: ['Servidor de Procesamiento de Imágenes', 'Inventario de Servidores Portátiles', 'Proveedor de Servicios de Internet',  'Interfaz de Servicios de Procesamiento'],
        respuesta: 'Proveedor de Servicios de Internet'
    },
    {
        pregunta: '¿Cuál es el componente principal de un ordenador?',
        opciones: ['Teclado', 'Procesador', 'Monitor', 'Ratón'],
        respuesta: 'Procesador'
    },
    {
        pregunta: '¿Qué empresa desarrolló el sistema operativo Android?',
        opciones: ['Apple', 'Microsoft', 'Linux Foundation', 'Google'],
        respuesta: 'Google'
    },
    {
        pregunta: '¿Qué es la realidad virtual?',
        opciones: ['Una nueva versión de la televisión', 'Una técnica de impresión en 3D', 'Una tecnología que simula un entorno tridimensional', 'Una herramienta de edición de vídeo'],
        respuesta: 'Una tecnología que simula un entorno tridimensional'
    },
    {
        pregunta: '¿Qué es un navegador web?',
        opciones: ['Un tipo de virus informático', 'Un programa que permite acceder a páginas web en internet',  'Una herramienta de diseño gráfico', 'Un dispositivo de almacenamiento de datos'],
        respuesta: 'Un programa que permite acceder a páginas web en internet'
    },
    {
        pregunta: '¿Cuál de las siguientes tecnologías se utiliza para la impresión en 3D?',
        opciones: ['Impresión Láser', 'Impresión de Inyección de Tinta', 'Fabricación Aditiva',  'Impresión Offset'],
        respuesta: 'Fabricación Aditiva'
    },
    {
        pregunta: '¿Quién escribió "El Quijote"?',
        opciones: ['Gabriel García Márquez', 'Miguel de Cervantes', 'Pablo Neruda', 'William Shakespeare'],
        respuesta: 'Miguel de Cervantes'
    },
    {
        pregunta: '¿Cuál es el título de la obra más famosa de William Shakespeare?',
        opciones: ['Romeo y Julieta', 'Hamlet', 'Macbeth', 'La Tempestad'],
        respuesta: 'Hamlet'
    },
    {
        pregunta: '¿Quién escribió "Cien años de soledad"?',
        opciones: ['Pablo Neruda', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Mario Vargas Llosa'],
        respuesta: 'Gabriel García Márquez'
    },
    {
        pregunta: '¿Qué escritor es conocido por su obra "1984"?',
        opciones: ['Aldous Huxley', 'George Orwell',  'Ray Bradbury', 'J.R.R. Tolkien'],
        respuesta: 'George Orwell'
    },
    {
        pregunta: '¿Quién es el autor de "Don Juan Tenorio"?',
        opciones: ['Lope de Vega', 'Federico García Lorca', 'José Zorrilla', 'Antonio Machado'],
        respuesta: 'José Zorrilla'
    },
    {
        pregunta: '¿Cuál es el nombre del protagonista en "Romeo y Julieta"?',
        opciones: ['Julio', 'Marco', 'Romeo',  'Diego'],
        respuesta: 'Romeo'
    },
    {
        pregunta: '¿Quién escribió "La metamorfosis"?',
        opciones: ['Franz Kafka', 'Fyodor Dostoevsky', 'Leo Tolstoy', 'James Joyce'],
        respuesta: 'Franz Kafka'
    },
    {
        pregunta: '¿Qué autor escribió "Orgullo y prejuicio"?',
        opciones: ['Charlotte Brontë', 'Emily Brontë', 'Jane Austen', 'Agatha Christie'],
        respuesta: 'Jane Austen'
    },
    {
        pregunta: '¿Cuál es el título de la primera novela de Gabriel García Márquez?',
        opciones: ['El Coronel no tiene quien le escriba', 'La casa de los espíritus', 'La Hojarasca', 'Crónica de una muerte anunciada'],
        respuesta: 'La Hojarasca'
    },
    {
        pregunta: '¿Quién escribió "La Odisea"?',
        opciones: ['Virgilio', 'Homero', 'Dante Alighieri', 'Eurípides'],
        respuesta: 'Homero'
    },
    {
        pregunta: '¿Cuál es el título de la obra más conocida de Miguel de Unamuno?',
        opciones: ['San Manuel Bueno, mártir', 'Abel Sánchez', 'Niebla', 'La tía Tula'],
        respuesta: 'Niebla'
    },
    {
        pregunta: '¿Qué autor escribió "El retrato de Dorian Gray"?',
        opciones: ['Charles Dickens', 'Oscar Wilde', 'Henry James', 'Edgar Allan Poe'],
        respuesta: 'Oscar Wilde'
    },
    {
        pregunta: '¿Quién es el autor de "Los miserables"?',
        opciones: ['Gustave Flaubert', 'Victor Hugo', 'Émile Zola', 'Stendhal'],
        respuesta: 'Victor Hugo'
    },
    {
        pregunta: '¿Cuál es el título de la obra más famosa de Federico García Lorca?',
        opciones: ['Bodas de sangre', 'Yerma', 'La casa de Bernarda Alba',  'Poeta en Nueva York'],
        respuesta: 'La casa de Bernarda Alba'
    },
    {
        pregunta: '¿Quién escribió "El Aleph"?',
        opciones: ['Julio Cortázar', 'Pablo Neruda', 'Jorge Luis Borges', 'Gabriel García Márquez'],
        respuesta: 'Jorge Luis Borges'
    },
    {
        pregunta: '¿Cuál es la capital de Honduras?',
        opciones: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba', 'Comayagua'],
        respuesta: 'Tegucigalpa'
    },
    {
        pregunta: '¿En qué año Honduras obtuvo su independencia de España?',
        opciones: ['1838', '1821', '1865', '1892'],
        respuesta: '1821'
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Honduras?',
        opciones: ['Lempira', 'Peso', 'Dólar', 'Quetzal'],
        respuesta: 'Lempira'
    },
    {
        pregunta: '¿Quién es considerado el héroe nacional de Honduras por su papel en la independencia del país?',
        opciones: ['José Cecilio del Valle', 'Francisco Morazán', 'Lempira', 'Juan Lindo'],
        respuesta: 'Francisco Morazán'
    },
    {
        pregunta: '¿Cuál es el río más largo de Honduras?',
        opciones: ['Río Ulúa', 'Río Patuca', 'Río Choluteca', 'Río Aguan'],
        respuesta: 'Río Patuca'
    },
    {
        pregunta: '¿Qué cadena montañosa atraviesa gran parte de Honduras?',
        opciones: ['La Sierra Madre Occidental', 'Los Andes', 'La Cordillera Centroamericana', 'Los Pirineos'],
        respuesta: 'La Cordillera Centroamericana'
    },
    {
        pregunta: '¿Cuál es el principal producto de exportación de Honduras?',
        opciones: ['Banano', 'Azúcar', 'Café',  'Tabaco'],
        respuesta: 'Café'
    },
    {
        pregunta: '¿Cuál es la isla más grande de Honduras?',
        opciones: ['Isla de Utila', 'Isla de Guanaja', 'Isla de Amapala', 'Isla de Roatán'],
        respuesta: 'Isla de Roatán'
    },
    {
        pregunta: '¿En qué departamento se encuentra el sitio arqueológico de Copán?',
        opciones: ['Santa Bárbara', 'Cortés', 'La Paz', 'Copán Ruinas'],
        respuesta: 'Copán Ruinas'
    },
    {
        pregunta: '¿Cuál es la lengua oficial de Honduras?',
        opciones: ['Español', 'Garífuna', 'Miskito', 'Lenca'],
        respuesta: 'Español'
    },
    {
        pregunta: '¿Cuál es el nombre del parque nacional más grande de Honduras?',
        opciones: ['Parque Nacional La Tigra', 'Parque Nacional Pico Bonito', 'Parque Nacional Celaque', 'Parque Nacional Jeannette Kawas'],
        respuesta: 'Parque Nacional La Tigra'
    },
    {
        pregunta: '¿Qué deporte es especialmente popular en Honduras?',
        opciones: ['Béisbol', 'Baloncesto', 'Voleibol', 'Fútbol'],
        respuesta: 'Fútbol'
    },
    {
        pregunta: '¿Cuál es el nombre del aeropuerto internacional más importante de Honduras?',
        opciones: ['Aeropuerto Internacional Ramón Villeda Morales', 'Aeropuerto Internacional Toncontín', 'Aeropuerto Internacional Golosón', 'Aeropuerto Internacional Juan Manuel Gálvez'],
        respuesta: 'Aeropuerto Internacional Ramón Villeda Morales'
    },
    {
        pregunta: '¿Cuál es el nombre de la playa más famosa de Honduras?',
        opciones: ['Tela', 'Roatán', 'Trujillo', 'La Ceiba'],
        respuesta: 'Roatán'
    },
    {
        pregunta: '¿Cuál es la principal industria manufacturera de Honduras?',
        opciones: ['Automotriz', 'Textil', 'Electrónica', 'Alimentaria'],
        respuesta: 'Textil'
    },
    {
        pregunta: '¿Cuál es la flor nacional de Honduras?',
        opciones: ['Rosa', 'Lirio', 'Orquídea', 'Hortensia'],
        respuesta: 'Orquídea'
    },
    {
        pregunta: '¿Cuál es el nombre de la danza típica de Honduras?',
        opciones: ['Salsa', 'Merengue', 'Punta', 'Cumbia'],
        respuesta: 'Punta'
    },
    {
        pregunta: '¿En qué año se fundó la primera universidad de Honduras?',
        opciones: ['1827', '1847',  '1902', '1950'],
        respuesta: '1847'
    },
    {
        pregunta: '¿Quién es conocido como el "Rey del Pop"?',
        opciones: ['Michael Jackson', 'Elvis Presley', 'Madonna', 'Prince'],
        respuesta: 'Michael Jackson'
    },
    {
        pregunta: '¿Qué banda lanzó el álbum "The Dark Side of the Moon"?',
        opciones: ['Pink Floyd', 'The Beatles', 'Led Zeppelin', 'The Rolling Stones'],
        respuesta: 'Pink Floyd'
    },
    {
        pregunta: '¿Cuál es el género musical característico de Jamaica?',
        opciones: ['Reggae', 'Salsa', 'Bachata', 'Cumbia'],
        respuesta: 'Reggae'
    },
    {
        pregunta: '¿Quién es el líder de la banda británica "Queen"?',
        opciones: ['John Lennon', 'Paul McCartney', 'Freddie Mercury', 'David Bowie'],
        respuesta: 'Freddie Mercury'
    },
    {
        pregunta: '¿Cuál de los siguientes artistas es conocido como "El Rey del Rock and Roll"?',
        opciones: ['Chuck Berry', 'Buddy Holly', 'Elvis Presley', 'Little Richard'],
        respuesta: 'Elvis Presley'
    },
    {
        pregunta: '¿Qué instrumento tocaba Jimi Hendrix?',
        opciones: ['Batería', 'Bajo', 'Guitarra eléctrica',  'Teclado'],
        respuesta: 'Guitarra eléctrica'
    },
    {
        pregunta: '¿Quién compuso la famosa obra "Für Elise"?',
        opciones: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert'],
        respuesta: 'Ludwig van Beethoven'
    },
    {
        pregunta: '¿Cuál es el instrumento principal en una orquesta sinfónica?',
        opciones: ['Violín', 'Piano', 'Flauta', 'Trompeta'],
        respuesta: 'Violín'
    },
    {
        pregunta: '¿Qué instrumento toca el músico famoso Eric Clapton?',
        opciones: ['Batería', 'Guitarra', 'Bajo', 'Teclado'],
        respuesta: 'Guitarra'
    },
    {
        pregunta: '¿Cuál de los siguientes artistas es conocido como "El Rey del Reggae"?',
        opciones: ['Bob Marley', 'Peter Tosh', 'Jimmy Cliff', 'Bunny Wailer'],
        respuesta: 'Bob Marley'
    },
    {
        pregunta: '¿Qué famoso compositor austriaco fue apodado "El padre de la sinfonía"?',
        opciones: ['Franz Schubert', 'Wolfgang Amadeus Mozart', 'Johann Strauss II', 'Joseph Haydn'],
        respuesta: 'Joseph Haydn'
    },
    {
        pregunta: "¿Qué banda británica lanzó el álbum ''Sgt. Pepper's Lonely Hearts Club Band''?",
        opciones: ['The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Queen'],
        respuesta: 'The Beatles'
    },  
    {
        pregunta: '¿Qué género musical tiene sus raíces en el Delta del Mississippi y es conocido por su uso de la guitarra slide?',
        opciones: ['Jazz', 'Rock and Roll', 'Blues', 'Country'],
        respuesta: 'Blues'
    },
    {
        pregunta: '¿Qué grupo musical lanzó el álbum "Abbey Road"?',
        opciones: ['Kazzabe', 'The Rolling Stones', 'The Beatles', 'Led Zeppelin'],
        respuesta: 'The Beatles'
    },
    {
        pregunta: '¿Qué género musical se originó en Nueva Orleans y se caracteriza por su ritmo y improvisación?',
        opciones: ['Rock', 'Salsa', 'Jazz', 'Hip-hop'],
        respuesta: 'Jazz'
    },
    {
        pregunta: '¿Qué instrumento es comúnmente asociado con el jazz?',
        opciones: ['Trompeta', 'Guitarra', 'Piano', 'Saxofón'],
        respuesta: 'Saxofón'
    },
    {
        pregunta: '¿Quién compuso la famosa obra "La Marcha Turca"?',
        opciones: ['Ludwig van Beethoven', 'Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Frédéric Chopin'],
        respuesta: 'Wolfgang Amadeus Mozart'
    },
    {
        pregunta: '¿Cuál es el género musical originario de Brasil que combina elementos de samba y jazz?',
        opciones: ['Bossa Nova', 'Tango', 'Rumba', 'Flamenco'],
        respuesta: 'Bossa Nova'
    },
    {
        pregunta: '¿Quién es conocido como el "Rey del Blues"?',
        opciones: ['B.B. King', 'Muddy Waters', 'Robert Johnson', 'John Lee Hooker'],
        respuesta: 'B.B. King'
    },
    {
        pregunta: '¿Qué es JavaScript?',
        opciones: ['Un lenguaje de programación', 'Un sistema operativo', 'Un navegador web', 'Un editor de texto'],
        respuesta: 'Un lenguaje de programación'
    },
    {
        pregunta: '¿Quién desarrolló JavaScript?',
        opciones: ['Bill Gates', 'Brendan Eich', 'Tim Berners-Lee', 'Larry Page'],
        respuesta: 'Brendan Eich'
    },
    {
        pregunta: '¿Cuál es el objetivo principal de JavaScript?',
        opciones: ['Enviar correos electrónicos', 'Diseñar gráficos 3D', 'Agregar interactividad a páginas web', 'Crear bases de datos'],
        respuesta: 'Agregar interactividad a páginas web'
    },
    {
        pregunta: '¿Qué tipo de lenguaje es JavaScript?',
        opciones: ['Lenguaje de programación de bajo nivel', 'Lenguaje de marcado', 'Lenguaje de programación de alto nivel', 'Lenguaje de consulta'],
        respuesta: 'Lenguaje de programación de alto nivel'
    },
    {
        pregunta: '¿Cuál es la extensión de archivo común para los archivos JavaScript?',
        opciones: ['.js', '.html', '.css', '.php'],
        respuesta: '.js'
    },
    {
        pregunta: '¿Qué API de HTML5 permite la manipulación de gráficos y animaciones en 2D y 3D?',
        opciones: ['Canvas', 'SVG', 'Audio', 'WebRTC'],
        respuesta: 'Canvas'
    },
    {
        pregunta: '¿Cómo se declara una variable en JavaScript?',
        opciones: ['Con la palabra clave "variable"', 'Con la palabra clave "declare"', 'Con la palabra clave "let" o "const"', 'Con la palabra clave "def"'],
        respuesta: 'Con la palabra clave "var", "let" o "const"'
    },
    {
        pregunta: '¿Qué método se utiliza para imprimir un mensaje en la consola del navegador en JavaScript?',
        opciones: ['console.log()', 'print()', 'display()', 'alert()'],
        respuesta: 'console.log()'
    },
    {
        pregunta: '¿Qué método se utiliza para seleccionar un elemento HTML en JavaScript?',
        opciones: ['document.querySelector()', 'getElementById()', 'getElementByTagName()', 'getElementByClassName()'],
        respuesta: 'document.querySelector()'
    },
    {
        pregunta: '¿Qué significa JSON en JavaScript?',
        opciones: ['JavaScript Object Network', 'JavaScript Object Notation', 'JavaScript Operation Namespace', 'JavaScript Object Node'],
        respuesta: 'JavaScript Object Notation'
    },
    {
        pregunta: '¿Qué estructura de control se utiliza para tomar decisiones en JavaScript?',
        opciones: ['if...else', 'for', 'while', 'switch'],
        respuesta: 'if...else'
    },
    {
        pregunta: '¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?',
        opciones: ['append()', 'add()', 'push()', 'insert()'],
        respuesta: 'push()'
    },
    {
        pregunta: '¿Qué método se utiliza para cambiar el contenido de un elemento HTML en JavaScript?',
        opciones: ['innerText', 'textContent', 'innerHTML', 'setAttribute'],
        respuesta: 'innerHTML'
    },
    {
        pregunta: '¿Cuál es el operador de comparación estricta en JavaScript?',
        opciones: ['==', '!=', '===', '!=='],
        respuesta: '==='
    },
    {
        pregunta: '¿Qué función se utiliza para convertir una cadena a un número en JavaScript?',
        opciones: ['parseFloat()', 'toNumber()', 'parseInt()', 'convertToNumber()'],
        respuesta: 'parseInt()'
    },
    {
        pregunta: '¿Qué videojuego es considerado el pionero del género de los juegos de plataformas?',
        opciones: ['Pac-Man', 'Donkey Kong', 'Sonic the Hedgehog' , 'Super Mario Bros.'],
        respuesta: 'Donkey Kong'
    },
    {
        pregunta: '¿Quién es el personaje principal en la serie de videojuegos "The Legend of Zelda"?',
        opciones: ['Link', 'Sonic', 'Kratos' , 'Mario'],
        respuesta: 'Link'
    },
    {
        pregunta: '¿Cuál es el nombre del estudio de desarrollo detrás de la serie de videojuegos "Final Fantasy"?',
        opciones: ['Square Enix', 'Nintendo', 'Capcom', 'Blizzard Entertainment'],
        respuesta: 'Square Enix'
    },
    {
        pregunta: '¿Cuál es el videojuego más vendido de todos los tiempos?',
        opciones: ['Tetris', 'Grand Theft Auto V', 'Minecraft', 'Wii Sports'],
        respuesta: 'Minecraft'
    },
    {
        pregunta: "¿Qué año fue lanzado el primer videojuego de la serie ''Assassin's Creed''?",
        opciones: ['2009', '2007', '2005', '2010'],
        respuesta: '2007'
    }, 
    {
        pregunta: '¿Cuál es el nombre del protagonista en la serie de videojuegos "Metal Gear Solid"?',
        opciones: ['Big Boss', 'Solid Snake', 'Raiden', 'Liquid Snake'],
        respuesta: 'Solid Snake'
    },
    {
        pregunta: '¿Qué género de videojuegos se enfoca principalmente en la construcción y gestión de ciudades virtuales?',
        opciones: ['Simulación', 'Estrategia', 'Aventura', 'Acción'],
        respuesta: 'Simulación'
    },
    {
        pregunta: '¿Cuál es el nombre del mundo de fantasía en el que se ambienta la serie de videojuegos "The Elder Scrolls"?',
        opciones: ['Azeroth', 'Midgar', 'Tamriel', 'Hyrule'],
        respuesta: 'Tamriel'
    },
    {
        pregunta: '¿Qué videojuego popular introdujo el concepto de "loot boxes" o cajas de botín?',
        opciones: ['Overwatch', 'FIFA', 'Fortnite', 'Star Wars Battlefront II'],
        respuesta: 'Star Wars Battlefront II'
    },
    {
        pregunta: '¿Cuál es el género de videojuegos caracterizado por su enfoque en resolver acertijos y rompecabezas?',
        opciones: ['Aventura Gráfica', 'Puzzle', 'Rol', 'Plataforma'],
        respuesta: 'Puzzle'
    },
    {
        pregunta: '¿Qué videojuego popular lanzado en 2017 cuenta con un vasto mundo abierto y permite a los jugadores explorar, cazar y luchar contra criaturas fantásticas?',
        opciones: ['The Legend of Zelda: Breath of the Wild', 'The Witcher 3: Wild Hunt', 'Monster Hunter: World', 'Red Dead Redemption 2'],
        respuesta: 'Monster Hunter: World'
    },
    {
        pregunta: '¿Qué serie de videojuegos es conocida por su juego de rol basado en turnos y su mundo de fantasía medieval?',
        opciones: ['The Elder Scrolls', 'Final Fantasy', 'Dragon Age', 'The Witcher'],
        respuesta: 'Final Fantasy'
    },
    {
        pregunta: '¿Cuál es el nombre del protagonista en la serie de videojuegos "Uncharted"?',
        opciones: ['Nathan Drake', 'John Marston', 'Joel', 'Ezio Auditore'],
        respuesta: 'Nathan Drake'
    }      
]