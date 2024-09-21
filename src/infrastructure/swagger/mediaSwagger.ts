/**
 * @swagger
 * tags:
 *   - name: Media
 *     description: Operações relacionadas a mídia
 */

/**
 * @swagger
 * /api/video/update:
 *   post:
 *     summary: Salva uma nova mídia/vídeo
 *     tags: [Media]
 *     parameters:
 *       - name: title
 *         in: query
 *         required: true
 *         description: Titulo do filme
 *         schema: 
 *           type: string
 *       - name: description
 *         in: query
 *         required: true
 *         description: Sinopse do filme
 *         schema: 
 *           type: string
 *       - name: realese_date
 *         in: query
 *         required: true
 *         description: Data de lançamento do filme
 *         schema: 
 *           type: date
 *       - name: categories
 *         in: query
 *         required: true
 *         description: categorias do filme
 *         schema: 
 *           type: array
 *       - name: uploaded_file
 *         in: query
 *         required: true
 *         description: Midia do filme
 *         schema: 
 *           type: file
 *       - name: media_type
 *         in: query
 *         required: true 
 *         description: Tipo da midia (film ou serie)
 *         schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: Vídeo salvo com sucesso
 */

/**
 * @swagger
 * /api/new/category:
 *   post:
 *     summary: Cria uma nova catregoria de filme
 *     tags: [Media]
 *     parameters:
 *       - name: name
 *         in: query
 *         required: true
 *         description: Nome da categoria
 *         schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: Vídeo salvo com sucesso
 */
