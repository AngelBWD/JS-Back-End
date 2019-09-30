const data = require('../config/database');
const fs = require('fs');
const path = require('path');


class CubeModel {

   constructor() {
      this.data = require('../config/database')

   }

   _write(newData, resolveData){
      return new Promise((resolve, reject) => {
         fs.writeFile(path.resolve('config/database.json'), JSON.stringify(newData, null, 2), (err) => {
            if (err) {reject(err); return; }
            this.data = newData;
            resolve(resolveData);
         });
      });
   }
   insert(newCube) {
      const newIndex = ++this.data.lastIndex;
      newCube = {id: newIndex, ...newCube };
      const newData = {
         lastIndex: newIndex,
         entities: this.data.entities.concat(newCube)
      };

      return this._write(newData, newCube);
   }

   update(cubeId, update) {
      const entityIndex = this.data.entities.findIndex(({id}) => id === cubeId);
      const entity = this.data.entities[entityIndex];
      const updateEntity = { ...entity, ...update};

      const newData = {
         lastIndex: this.data.lastIndex,
         entities: [
            ...this.data.entities.slice(0, entityIndex),
            updateEntity,
            ...this.data.entities.slice(entityIndex + 1)
         ]
      };
      return this._write(newData, updateEntity);
   }

   delete(id) {
      const deleteEntity = this.getOne(id);
     
      const newData = {
         lastIndex: this.data.lastIndex,
         entities: this.data.entities.filter(({id: i}) => i !== id)
      }
      return this._write(newData, deleteEntity);         
   }

   getOne() {
      return Promise.resolve(this.data.entities.find(({id: i}) => i ===id)); 
   }

   getAll() {
      return Promise.resolve(this.data.entities); 
   }

}

module.exports = new CubeModel();