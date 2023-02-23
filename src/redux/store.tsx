import { configureStore } from '@reduxjs/toolkit';
import incriDicri  from './IncriDicri';


export default  configureStore({
    reducer: {
        user:incriDicri,

    }
  })