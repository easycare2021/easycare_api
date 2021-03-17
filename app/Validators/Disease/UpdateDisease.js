'use strict'

class UpdateDisease {
  
  async fails(errorMessages) {
    return this.ctx.response.status(422).json(errorMessages);
  }
  
  get rules () {
    return {
      description: 'required',
    }
  }

  get messages() {
    return {
      'description.required': 'A descrição deve ser informada',
    }
  }
}

module.exports = UpdateDisease
