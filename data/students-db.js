const students = [
    {student: 'Dacey Loving', attendance: true},
    {student: 'Dennis Forward', attendance: false},
    {student: 'Amelia Jane', attendance: false}
  ]

  module.exports = {
    getAll: function() {
        return students
    }
  }