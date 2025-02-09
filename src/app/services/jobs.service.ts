import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { TimelineItem } from '../interfaces/timeline-item';

interface TimelineResponse {
  jobs: TimelineItem[];
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  uri: string = environment.backend + '/jobs';

  constructor(private httpClient: HttpClient) { }
  getJobs(): Observable<TimelineItem[]> {
    return this.httpClient.get<TimelineResponse>(this.uri).pipe(
      map(response => {
        return response.jobs.map(job => {
          return {
            ...job,
            id: job._id ? job._id : '',
            description: Array.isArray(job.description) ? job.description : JSON.parse(job.description),
            technologies: Array.isArray(job.technologies) ? job.technologies : job.technologies ? JSON.parse(job.technologies) : [],
            active: false,
          };
        });
      })
    );
  }
}
