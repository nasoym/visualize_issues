'use strict';

angular.module('visualizeIssuesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.fixture_02 = [
  { "id": 3000, 
    "project": { "id": 100, "name":"project name" }, 
    "tracker": { "id": 2, "name": "Feature" }, 
    "status": { "id": 1, "name": "New" }, 
    "priority": { "id": 4, "name": "Normal" }, 
    "author": { "id": 176, "name": "bush" }, 
    "fixed_version": { "id": 90, "name": "sprint 20" }, 
    "subject": "project: user story abc", 
    "start_date": "2014-08-26", 
    "due_date": "2014-09-10", 
    "done_ratio": 0, 
    "created_on": "2014-08-08T08:38:41Z", 
    "updated_on": "2014-08-26T13:08:06Z", 
    "story_points": 2.5, 
    "release": { 
      "release": { "id": 1, "name": "Deviewer" }
    },
    "children": [
      { "id": 3100, 
        "project": { "id": 100, "name":"project name" }, 
        "tracker": { "id": 4, "name": "Task" }, 
        "status": { "id": 1, "name": "New" }, 
        "priority": { "id": 4, "name": "Normal" }, 
        "author": { "id": 79, "name": "max" }, 
        "assigned_to": { "id": 140, "name": "moritz" }, 
        "fixed_version": { "id": 90, "name": "sprint 20" }, 
        "parent": { "id": 3000 }, 
        "subject": "task abc", 
        "description": "{\"a\":45,\"tags\":[\"calendar\",\"nice\"]}", 
        "start_date": "2014-09-03", 
        "done_ratio": 0, 
        "estimated_hours": 8, 
        "created_on": "2014-09-03T09:40:55Z", 
        "updated_on": "2014-09-04T07:02:50Z"
      }, 
      { "id": 3101, 
        "project": { "id": 100, "name":"project name" }, 
        "tracker": { "id": 4, "name": "Task" }, 
        "status": { "id": 1, "name": "New" }, 
        "priority": { "id": 4, "name": "Normal" }, 
        "author": { "id": 79, "name": "max" }, 
        "assigned_to": { "id": 140, "name": "moritz" }, 
        "fixed_version": { "id": 90, "name": "sprint 20" }, 
        "parent": { "id": 3000 }, 
        "subject": "issue abc", 
        "description": "{\"a\":44,\"tags\":[\"work\",\"nice\"]}", 
        "start_date": "2014-09-03", 
        "done_ratio": 0, 
        "estimated_hours": 8, 
        "created_on": "2014-09-03T09:40:55Z", 
        "updated_on": "2014-09-04T07:02:50Z"
      },
      { "id": 3102, 
        "project": { "id": 100, "name":"project name" }, 
        "tracker": { "id": 4, "name": "Task" }, 
        "status": { "id": 2, "name": "Doing" }, 
        "priority": { "id": 4, "name": "Normal" }, 
        "author": { "id": 79, "name": "max" }, 
        "assigned_to": { "id": 140, "name": "moritz" }, 
        "fixed_version": { "id": 90, "name": "sprint 20" }, 
        "parent": { "id": 3000 }, 
        "subject": "issue abc", 
        "description": "hello world", 
        "start_date": "2014-09-03", 
        "done_ratio": 0, 
        "estimated_hours": 8, 
        "created_on": "2014-09-03T09:40:55Z", 
        "updated_on": "2014-09-04T07:02:50Z"
      } 

    ]
  } 
];


  $scope.fixture_03 = [{"id":2956,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":176,"name":"bush"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: find good camera setup regarding light, lense and settings","start_date":"2014-08-26","due_date":"2014-09-10","done_ratio":0,"created_on":"2014-08-08T08:38:41Z","updated_on":"2014-08-26T13:08:06Z","story_points":0.5,"release":{"release":{"id":1,"name":"Deviewer"}}},{"id":3098,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: implement exhibit machine setup","description":"deliverable: machine should start application on booting in fullscreen","start_date":"2014-08-25","due_date":"2014-09-10","done_ratio":62,"estimated_hours":38,"created_on":"2014-08-22T08:56:53Z","updated_on":"2014-09-05T12:35:49Z","story_points":2.5,"release":{"release":{"id":1,"name":"Deviewer"}},"children":[{"id":3284,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":2,"name":"In work"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"test rex lost watchdog reaction during running","description":"","start_date":"2014-09-04","done_ratio":0,"estimated_hours":2,"created_on":"2014-09-04T14:06:28Z","updated_on":"2014-09-04T15:09:45Z"},{"id":3256,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"handle rex not found on system start by rebooting","description":"","start_date":"2014-09-03","done_ratio":0,"estimated_hours":2,"created_on":"2014-09-03T09:21:41Z","updated_on":"2014-09-03T09:57:41Z"},{"id":3270,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"creative computing state machine updates check in","description":"{\"tags\":[\"nice\"]}","start_date":"2014-09-03","done_ratio":0,"estimated_hours":4,"created_on":"2014-09-03T12:24:38Z","updated_on":"2014-09-04T15:09:53Z"},{"id":3285,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"cron job for shutdown","start_date":"2014-09-04","done_ratio":0,"estimated_hours":3,"created_on":"2014-09-04T15:10:42Z","updated_on":"2014-09-05T11:16:11Z"},{"id":3287,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"add image magick image scaling and filtering","start_date":"2014-09-04","done_ratio":0,"created_on":"2014-09-04T15:11:46Z","updated_on":"2014-09-05T11:19:37Z"},{"id":3289,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"camera script flag for keeping camera images or not","start_date":"2014-09-04","done_ratio":0,"created_on":"2014-09-04T15:12:22Z","updated_on":"2014-09-04T15:12:22Z"},{"id":3295,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"move user detection times into config file","start_date":"2014-09-05","done_ratio":0,"created_on":"2014-09-05T12:10:51Z","updated_on":"2014-09-05T12:10:51Z"},{"id":3296,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3098},"subject":"add method to screen class which is called with animation parameter","start_date":"2014-09-05","done_ratio":0,"created_on":"2014-09-05T12:19:46Z","updated_on":"2014-09-05T12:19:46Z"}]},{"id":3099,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to see the camera image when the user is immobile","description":"deliverable: when user is immobile trigger camera image grabbing and store load image to camera model (show in zoom state or debug state)","start_date":"2014-08-25","due_date":"2014-09-10","done_ratio":70,"estimated_hours":43,"created_on":"2014-08-22T09:06:39Z","updated_on":"2014-09-04T07:42:12Z","story_points":2.5,"release":{"release":{"id":1,"name":"Deviewer"}},"children":[{"id":3262,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":2,"name":"In work"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":140,"name":"moritz"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3099},"subject":"investigate take camera image timeout","description":"","start_date":"2014-09-03","done_ratio":0,"estimated_hours":4,"created_on":"2014-09-03T09:40:55Z","updated_on":"2014-09-04T07:02:50Z"},{"id":3261,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":140,"name":"moritz"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3099},"subject":"turn on off led lights from processing","description":"{\"tags\":[\"nice\"]}","start_date":"2014-09-03","done_ratio":0,"estimated_hours":6,"created_on":"2014-09-03T09:23:39Z","updated_on":"2014-09-04T07:42:11Z"},{"id":3266,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3099},"subject":"investigate when screen is loading camera model PImage application freezes","description":"{\"tags\":[\"nice\"]}","start_date":"2014-09-03","done_ratio":0,"estimated_hours":3,"created_on":"2014-09-03T11:16:57Z","updated_on":"2014-09-04T07:42:12Z"}]},{"id":3100,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to see the eye image when the user is immobile","description":"deliverable: extract eye image from camera image and store into camera model (show in zoom state or debug state)","start_date":"2014-08-25","due_date":"2014-09-10","done_ratio":85,"estimated_hours":57,"created_on":"2014-08-22T09:18:36Z","updated_on":"2014-09-05T11:13:44Z","story_points":2.5,"release":{"release":{"id":1,"name":"Deviewer"}},"children":[{"id":3268,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":2,"name":"In work"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3100},"subject":"investigate gaze model java alpha error and put clamped gaze radius into configuration file","description":"{\"tags\":[\"nice\"]}","start_date":"2014-09-03","done_ratio":0,"estimated_hours":2,"created_on":"2014-09-03T11:18:05Z","updated_on":"2014-09-04T07:42:13Z"},{"id":3162,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3100},"subject":"think of opencv corner cases and provide images for it","description":"{\"tags\":[\"nice\"]}","start_date":"2014-08-25","done_ratio":0,"estimated_hours":4,"created_on":"2014-08-26T14:09:42Z","updated_on":"2014-09-04T07:42:13Z"},{"id":3264,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3100},"subject":"subdivide deview view into zooming and deviewing use camera image asset in zoom screen","description":"{\"tags\":[\"nice\"]}","start_date":"2014-09-03","done_ratio":0,"estimated_hours":3,"created_on":"2014-09-03T10:07:04Z","updated_on":"2014-09-04T07:51:03Z"}]},{"id":3142,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to see the final deviewing effect","start_date":"2014-08-26","due_date":"2014-09-10","done_ratio":40,"estimated_hours":10,"created_on":"2014-08-26T12:33:23Z","updated_on":"2014-08-26T17:25:14Z","story_points":10,"release":{"release":{"id":1,"name":"Deviewer"}},"children":[{"id":3161,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":3,"name":"Assigned"},"priority":{"id":4,"name":"Normal"},"author":{"id":176,"name":"bush"},"assigned_to":{"id":176,"name":"bush"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3142},"subject":"Add the deviewing particles","description":"","start_date":"2014-08-26","done_ratio":0,"estimated_hours":4,"created_on":"2014-08-26T14:05:53Z","updated_on":"2014-08-26T14:05:55Z"},{"id":3164,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":3,"name":"Assigned"},"priority":{"id":4,"name":"Normal"},"author":{"id":176,"name":"bush"},"assigned_to":{"id":176,"name":"bush"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3142},"subject":"Increase the deviewing with time","description":"","start_date":"2014-08-26","done_ratio":0,"estimated_hours":2,"created_on":"2014-08-26T17:25:12Z","updated_on":"2014-08-26T17:25:14Z"}]},{"id":3143,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to see the idle eyes","start_date":"2014-08-26","due_date":"2014-09-10","done_ratio":0,"estimated_hours":10,"created_on":"2014-08-26T12:33:40Z","updated_on":"2014-08-29T08:28:04Z","story_points":2.5,"release":{"release":{"id":1,"name":"Deviewer"}},"children":[{"id":3182,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":3,"name":"Assigned"},"priority":{"id":4,"name":"Normal"},"author":{"id":176,"name":"bush"},"assigned_to":{"id":176,"name":"bush"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3143},"subject":"Make eye opening video","description":"","start_date":"2014-08-26","done_ratio":0,"estimated_hours":2,"created_on":"2014-08-29T08:25:57Z","updated_on":"2014-08-29T08:25:59Z"},{"id":3183,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":3,"name":"Assigned"},"priority":{"id":4,"name":"Normal"},"author":{"id":176,"name":"bush"},"assigned_to":{"id":176,"name":"bush"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3143},"subject":"Prototype video loop","description":"","start_date":"2014-08-26","done_ratio":0,"estimated_hours":8,"created_on":"2014-08-29T08:27:55Z","updated_on":"2014-08-29T08:28:03Z"}]},{"id":3144,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to see the states and step through them with keys and see placeholder transitions","description":"deliverable: it shoule be possible to navigate through all application states and see fading transitions","start_date":"2014-08-22","due_date":"2014-09-10","done_ratio":100,"estimated_hours":17,"created_on":"2014-08-26T12:42:56Z","updated_on":"2014-09-01T10:12:03Z","story_points":2.5,"release":{"release":{"id":1,"name":"Deviewer"}}},{"id":3149,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to see state switching based on user presence, moving or immobile","description":"deliverable: debug states should show that the gaze model reflects if the user is present, moving or immobile","start_date":"2014-08-25","due_date":"2014-09-10","done_ratio":81,"estimated_hours":26,"created_on":"2014-08-26T12:43:15Z","updated_on":"2014-09-04T07:22:05Z","story_points":2.5,"release":{"release":{"id":1,"name":"Deviewer"}},"children":[{"id":3263,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":2,"name":"In work"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":140,"name":"moritz"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3149},"subject":"finalize tracking area detection in gaze model","description":"","start_date":"2014-09-03","done_ratio":0,"estimated_hours":2,"created_on":"2014-09-03T09:41:44Z","updated_on":"2014-09-03T11:34:29Z"},{"id":3265,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":2,"name":"In work"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"assigned_to":{"id":140,"name":"moritz"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3149},"subject":"assert that user movement is ignored once the camera image is taken","description":"","start_date":"2014-09-03","done_ratio":0,"estimated_hours":4,"created_on":"2014-09-03T10:08:14Z","updated_on":"2014-09-03T11:34:31Z"}]},{"id":3152,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"deviewer: i want to have the exhibit installed and running at AdK","start_date":"2014-08-26","due_date":"2014-09-10","done_ratio":0,"estimated_hours":1,"created_on":"2014-08-26T13:10:25Z","updated_on":"2014-08-26T14:02:24Z","story_points":2.5,"children":[{"id":3159,"project":{"id":201,"name":"project name"},"tracker":{"id":4,"name":"Task"},"status":{"id":3,"name":"Assigned"},"priority":{"id":4,"name":"Normal"},"author":{"id":176,"name":"bush"},"assigned_to":{"id":176,"name":"bush"},"fixed_version":{"id":93,"name":"sprint 22"},"parent":{"id":3152},"subject":"Design and print out the “No glasses, no contact lenses” sign","description":"","start_date":"2014-08-26","done_ratio":0,"estimated_hours":1,"created_on":"2014-08-26T14:02:22Z","updated_on":"2014-08-26T14:02:24Z"}]},{"id":3153,"project":{"id":201,"name":"project name"},"tracker":{"id":2,"name":"Feature"},"status":{"id":1,"name":"New"},"priority":{"id":4,"name":"Normal"},"author":{"id":79,"name":"max"},"fixed_version":{"id":93,"name":"sprint 22"},"subject":"UHCI: i want mockups for the eye dragging mechanism","start_date":"2014-08-26","due_date":"2014-09-10","done_ratio":0,"created_on":"2014-08-26T13:23:07Z","updated_on":"2014-08-26T13:30:04Z","story_points":2.5}];
    $scope.filterNew = function(items) {
        if (items.status.id == 1) {
          return items;
        } else {
          return null;
        }
    }
    $scope.filterDoing = function(items) {
        if (items.status.id == 2) {
          return items;
        } else {
          return null;
        }
    }
    $scope.filterAssigned = function(items) {
        if (items.status.id == 3) {
          return items;
        } else {
          return null;
        }
    }
  });
