import {videoRoutes} from './media/videoRoutes'
import {categoriesRoutes} from './media/categoriesRoutes'

export const routes = (app:any) => {
    app.use(
        videoRoutes,
        categoriesRoutes
    )
}