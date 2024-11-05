import express from 'express';
import { pool } from './db.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { PORT } from './config.js';
import bodyParser from 'body-parser';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viewsDir = join(__dirname,  'app', 'src', 'views')


app.use('/views', express.static(join(__dirname, 'views')));
app.use('/views', express.static(join(__dirname, 'app', 'src','views')));
app.use('/imagens', express.static(join(__dirname, 'app', 'src', 'imagens')));
app.use('/css', express.static(join(__dirname, 'app', 'src', 'css')));
app.use('/scripts', express.static(join(__dirname, 'app', 'src','scripts')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/views/css/table.css', (req, res) => {
  res.type('text/css'); // Set the MIME type to text/css
  res.sendFile(join(__dirname, 'app', 'src', 'css', 'table.css'));
});





    app.post('/metas', async (req, res) => {
      const { codven, dtmeta,meta, tipometa } = req.body;
    
      try {
        await pool.query('INSERT INTO metas (codven, dtmeta, meta, tipometa) VALUES ($1, $2, $3, $4)', [codven, dtmeta, meta, tipometa]);

        res.redirect('/metas');
      } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
      }
    });
    
    app.get('/metas', (req, res)=>{
         const filePath = join (viewsDir, 'metas.html');
         fs.readFile(filePath, 'utf-8', (err, content)=>{
         if(err){
           console.log (err)
         }
        res.send(content)
           });
         });

         

         app.get('/listar', async (req, res) => {
          try {
            const result = await pool.query('SELECT * FROM metas');
            const metas = result.rows; // Assuming the rows are in the 'rows' property
        
            res.render('metas', { metas }); 
          } catch (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
          }
        });
        
    app.post('/delete-meta/:codven', async (req, res) => {
      const codven = req.params.codven;
    
      try {
        await pool.query('DELETE FROM metas WHERE codven = $1', [codven]);
        res.redirect('/listar');
      } catch (err) {
        console.error(err);
        res.status(500).send('Erro interno do servidor');
      }
    });



app.listen(PORT, () => {
  console.log('Server on port', PORT);
});


